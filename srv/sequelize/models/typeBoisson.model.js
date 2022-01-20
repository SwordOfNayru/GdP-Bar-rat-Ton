const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("type_boisson", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nom: {
            allowNull: false,
            type: DataTypes.STRING
        }
    })
}