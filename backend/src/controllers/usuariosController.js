import usuarios from "../models/Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class UsuariosController {
  static cadastrarUsuario = async (req, res) => {
    try {
      const { name, email, password, confirmpassword } = req.body;
      if (!name) {
        return res.status(422).json({ msg: "O nome é obrigatório" });
      }
      if (!email) {
        return res.status(422).json({ msg: "O e-mail é obrigatório" });
      }
      if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória" });
      }
      if (password !== confirmpassword) {
        return res.status(422).json({ msg: "As senhas não conferem" });
      }
      //verificar se usuário já existe
      const userExists = await usuarios.findOne({ email: email });
      if (userExists) {
        return res.status(422).json({ msg: "Por favor, utilize outro e-mail" });
      }

      //create a password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      //criação do usuário
      const usuario = new usuarios({
        name,
        email,
        password: passwordHash,
      });

      await usuario.save();
      res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao cadastrar usuário - ${err}` });
    }
  };
  static logarUsuario = async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
      return res.status(422).json({ msg: "O e-mail é obrigatório" });
    }
    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatória" });
    }
    const user = await usuarios.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }
    //check if password match
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha incorreta" });
    }

    try {
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );
      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso", token });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: `Aconteceu um erro no servidor, tente novamente mais tarde! - ${err}`,
      });
    }
  };
  static testeRotaPrivadaComToken = async (req, res) => {
    const id = req.params.id;
    //check if user exists
    const user = await usuarios.findById(id, "-password");
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }
    return res.status(200).json({ user });
  };
}

export default UsuariosController;
