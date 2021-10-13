const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter {
  constructor() {
    this.router = express.Router();
    this.config();
  }

  config() {
    const objServerC = new serverController.default();
    this.router.get("/listarProductos", objServerC.getAllProducts);
    this.router.post("/cargarProducto", objServerC.cargarProducto);
    this.router.post("/guardarContactenos", objServerC.cargarContactenos);
    // this.router.delete("/users", objServerC.deleteUser);
  }
}

exports.default = ServerRouter;