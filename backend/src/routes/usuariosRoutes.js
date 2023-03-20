import express from "express";
import UsuariosController from "../controllers/usuariosController.js";
import checkToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .post("/auth/register", UsuariosController.cadastrarUsuario)
  .post("/auth/user", UsuariosController.logarUsuario)
  .get("/user/:id", checkToken, UsuariosController.testeRotaPrivadaComToken);

export default router;
