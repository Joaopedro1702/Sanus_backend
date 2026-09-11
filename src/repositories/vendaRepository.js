const db = require("../connection/db");

//Criando venda
async function criarVenda(id_Cliente, id_Funcionario, nfe, valor, data_Venda, canal_Venda){
    const [result] = await db.query(
        "INSERT INTO Tbl_Venda (id_Cliente, id_Funcionario, nfe, valor, data_Venda, canal_Venda) VALUES (?, ?, ?, ?, ?, ?)",
        [id_Cliente, id_Funcionario, nfe, valor, data_Venda, canal_Venda]
    );
    return result;
}

//Criando função de buscar venda por id
async function buscarVendaPorId(id){
    const [result] = await db.query(
        "SELECT * FROM Tbl_Venda WHERE id = ?",
        [id]
    );
    return result;
}

//Criando função de atualizar venda
async function atualizarVenda(id, id_Cliente, id_Funcionario, nfe, valor, data_Venda, canal_Venda){
    const [result] = await db.query(
        `UPDATE Tbl_Venda
        SET id_Cliente = ?, id_Funcionario = ?, nfe = ?, valor = ?, data_Venda = ?, canal_Venda = ?
        WHERE id = ?`,
        [id_Cliente, id_Funcionario, nfe, valor, data_Venda, canal_Venda, id]
    );
    return result;
}

//Criando função para deletar venda
async function deletarVenda(id){
    const [result] = await db.query(
        "DELETE FROM Tbl_Venda WHERE id = ?",
        [id]
    );
    return result;
}

//Utilizando todas as funções
module.exports = {
    criarVenda,
    buscarVendaPorId,
    atualizarVenda,
    deletarVenda
};
