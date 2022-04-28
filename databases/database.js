const Sequelize = require ("sequelize");

const connection = new Sequelize ("calcnutri","root","12345",{
host : "localhost",
dialect : 'mongodb'
})



export default connection;