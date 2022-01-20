const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('bar', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        horaires: {
            allowNull: false,
            type: DataTypes.JSONB
        },
        nom: {
            allowNull: false,
            type: DataTypes.STRING
        },
        adresse: {
            allowNull: false,
            type: DataTypes.STRING
        },
        coordN: {
            allowNull: false,
            type: DataTypes.DECIMAL
        },
        coordS: {
            allowNull: false,
            type: DataTypes.DECIMAL
        },
        img: {
            allowNull: true,
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    })
}