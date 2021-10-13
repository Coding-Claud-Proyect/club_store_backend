const mongoose = require('mongoose');
const schema = mongoose.Schema;

var productoSchema = new schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    valorUnitario: {
        type: Number
    },
    imagen: {
        type: String
    },
    oferta: {
        type: Boolean
    }
}, {
    collection: 'productos'
});

module.exports = mongoose.model('Producto', productoSchema);