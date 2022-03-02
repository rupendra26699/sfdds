let { DataTypes } = require("sequelize");

let sequelize = require("./db");

const Accounts = sequelize.define("Accounts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  account_id: {
    type: DataTypes.STRING,
  },
  account_name: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  account_manager: {
    type: DataTypes.STRING,
  },
  //created_on , updated on
});

module.exports = Accounts;
