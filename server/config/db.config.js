const Sequelize = require("sequelize");
module.exports = new Sequelize('energybuild', 'root', 'Bohdan24041999', {
    timezone: '+03:00',
    host: 'localhost',
    dialect: 'mysql'
});