const { getConnection } = require("./database");

const registro = async (type) => {
    const conn = await getConnection();
    const results = await conn.query(`INSERT INTO users (email, password, termos, money, nome) VALUES ('${type.email}', '${type.password}', '1', '0', '${type.nome}');`);
    return results;
  };

module.exports = {
    registro
};