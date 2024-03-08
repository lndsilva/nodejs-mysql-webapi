const mysql = require('mysql2/promise')

const client = mysql.createPool(process.env.CONNECTION_STRING)

async function selectCustomers(){
    const res = await client.query('SELECT * FROM Clientes');
    return res[0]    
}
module.exports = {selectCustomers}