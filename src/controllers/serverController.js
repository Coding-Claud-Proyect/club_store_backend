const productos = require('../models/productos');
const contactenos = require('../models/contactenos');

class ServerController {
    constructor() {
    }

    cargarProducto(req, res) {
        productos.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    getAllProducts(req, res) {
        productos.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    cargarContactenos(req, res) {
        contactenos.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        })
    }
}

exports.default = ServerController;