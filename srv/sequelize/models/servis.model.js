const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("servis", {
        prix: {
            allowNull: false,
            type: DataTypes.DECIMAL
        },
        quantite: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    })
}