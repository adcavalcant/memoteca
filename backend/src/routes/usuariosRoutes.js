import express from "express";
import UsuariosController from "../controllers/usuariosController.js";

const router = express.Router();

router
  .post("/auth/register", UsuariosController.cadastrarUsuario)
  .post("/auth/user", UsuariosController.logarUsuario);

export default router;
