const db = require("../connection/db");

//Criando usuário
async function criarUsuario(nome, cpf, email, senha, data_Nasc){
    const [result] = await db.query(
        "INSERT INTO Tbl_Usuario (nome, cpf, email, senha, data_Nasc) VALUES (?, ?, ?, ?, ?)",
        [nome, cpf, email, senha, data_Nasc]
    );
    return result;
}

//Criando função de buscar usuário por id
async function buscarUsuarioPorId(id){
    const [result] = await db.query(
        "SELECT * FROM Tbl_Usuario WHERE id = ?",
        [id]
    );
    return result;
}

//Criando função de buscar usuário por Cpf

/*async function buscarUsuarioPorCpf(cpf){
    const [result] = await db.query(
        "SELECT * FROM Tbl_Usuario WHERE cpf = ?",
        [cpf]
    );
    return result;
}*/

//Criando função de criar usuário
async function atualizarUsuario(id, nome, cpf, email, senha, data_Nasc){
    const [result] = await db.query(
        `UPDATE Tbl_Usuario
        SET nome = ?, cpf =?, email = ?, senha = ?, data_Nasc = ?
        WHERE id = ?`
        [nome, cpf, email, senha, data_Nasc, id]
        );
        return result;
}

//Criando função para deletar usuário
async function deletarUsuario(id){
    const [result] = await db.query(
        "DELETE FROM Tbl_Usuario WHERE id = ?"
        [id]
    );
    return result;
}

//Utilizando todas as funções
module.exports = {
    criarUsuario,
    buscarUsuarioPorId,
    atualizarUsuario,
    deletarUsuario
};