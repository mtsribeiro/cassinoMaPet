const { getConnection } = require("./database");

const login = async (type) => {
  const conn = await getConnection();
  const results = await conn.query(`SELECT * FROM users Where email = '${type.email}' and password = '${type.password}'`);
  return results;
};

const verificaEmail = async (type) => {
  const conn = await getConnection();
  const results = await conn.query(`SELECT * FROM users Where email = '${type.email}'`);
  return results;
};

module.exports = {
  login,
  verificaEmail
};