const { Model, DataTypes } = require("sequelize");

export default {
    uuid: {
        type: DataTypes.UUID,
        default: DataTypes.UUIDV4,
        primaryKey: true,
    }
    nom: DataTypes.STRING,
    addresse: DataTypes.STRING,
}