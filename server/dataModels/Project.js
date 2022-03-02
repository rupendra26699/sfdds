let { DataTypes } = require('sequelize');

let sequelize = require("./db");

const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },

    shortName: {
        type: DataTypes.STRING
    },
    longName: {
        type: DataTypes.STRING
    },
    projectManagerId: {
        type: DataTypes.NUMBER
    },
    plannedStartDate: {
        type: DataTypes.DATE,
    },
    actualStartDate: {
        type: DataTypes.DATE
    },
    actualEndDate: {
        type: DataTypes.DATE
    },
    projectType: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'deleted')
    }

    //created_on , updated on 
})


module.exports = Project
