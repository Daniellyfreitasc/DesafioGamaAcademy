const Candidate = require('../models/Candidate');

module.exports = {
    async  register(req, res) {

        const { nome, cargo, nascimento, estadoc, sexo, cep, end, bairro, cidade, uf, tel, cel, email, id, cpf, car, cnh } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.nascimento = nascimento;
        newCandidate.estadoc = estadoc;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.end = end;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.tel = tel;
        newCandidate.cel = cel;
        newCandidate.email = email;
        newCandidate.id = id;
        newCandidate.cpf = cpf;
        newCandidate.car = car;
        newCandidate.cnh = cnh;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.Status(500).send('Tente novamente!');

            };
            return res.Status(200).send(savedCandidate);
        })
    }
}
