var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

   // const limite_linhas = 7;

    // var idAquario = req.params.idAquario;

   // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);


   var nome1 = req.body.nome1Server;
   var nome2 = req.body.nome2Server;
   var compatibilidade = req.body.compatibilidadeServer;
   var idUsuario = req.body.idUsuarioServer;
   


    medidaModel.buscarUltimasMedidas(nome1, nome2, compatibilidade, idUsuario).then(function (resultado) {

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {
    var idUsuario = req.params.idUsuario;

    medidaModel.buscarMedidasEmTempoReal(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}