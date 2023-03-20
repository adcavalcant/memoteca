import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import pensamentos from "./pensamentosRoutes.js";
import usuarios from "./usuariosRoutes.js";

const routes = (app) => {
  //public route
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Rota principal da API :)" });
  });

  app.use(express.json(), livros);
  app.use(express.json(), autores);
  app.use(express.json(), pensamentos);
  app.use(express.json(), usuarios);
};

export default routes;
