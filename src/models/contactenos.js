const mongoose = require('mongoose');
const schema = mongoose.Schema;

var contactenosSchema = new schema({
    nombres: {
        type: String
    },
    celular: {
        type: Number
    },
    email: {
        type: String
    },
    comentarios: {
        type: String
    }
}, {
    collection: 'contactenos'
});

module.exports = mongoose.model('Contacteno', contactenosSchema);