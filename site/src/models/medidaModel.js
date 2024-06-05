var database = require("../database/config");

function buscarUltimasMedidas( nome1, nome2, compatibilidade, idUsuario) {

    var instrucaoSql = `INSERT INTO Calculadora (nome1, nome2, compatibilidade, fkUsuario) VALUES
    ("${nome1}", "${nome2}", ${compatibilidade}, ${idUsuario})`; 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT nome1, nome2, compatibilidade FROM Calculadora where fkUsuario = ${idUsuario} ORDER BY compatibilidade`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
