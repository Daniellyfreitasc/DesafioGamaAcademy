const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: {type: String, unique: false, required: true},
    cargo: {type: String, unique: false, required: true},
    nascimento: {type: String, unique: false, required: true},
    estadoc: {type: String, unique: false, required: false},
    sexo: {type: String, unique: false, required: false},
    cep: {type: Number, unique: false, required: true},
    end: {type: String, unique: false, required: true},
    bairro: {type: String, unique: false, required: true},
    cidade: {type: String, unique: false, required: true},
    uf: {type: String, unique: false, required: true},
    tel: {type: Number, unique: false, required: false},
    cel: {type: Number, unique: false, required: true},
    email: {type: String, unique: true, required: true},
    id: {type: Number, unique: false, required: false},
    cpf: {type: Number, unique: true, required: true},
    car: {type: String, unique: false, required: false},
    cnh: {type: String, unique: false, required: false},

   },   {
       timestamps: true

    
   });

   
module.exports = mongoose.model('Candidate', CandidateSchema);
