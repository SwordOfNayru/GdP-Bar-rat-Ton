const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("servis", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        prix: {
            allowNull: false,
            type: DataTypes.DECIMAL,
        },
        quantite: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    });
};
