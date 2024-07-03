const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Order12345$", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
