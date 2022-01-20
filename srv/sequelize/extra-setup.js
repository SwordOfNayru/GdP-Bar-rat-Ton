function applyExtraSetup(sequelize) {
    const { boisson, type_boisson, servis, bar} = sequelize.models;


    type_boisson.hasMany(boisson, {
        foreignKey: "typeId"
    })
    boisson.belongsTo(type_boisson);

    boisson.belongsToMany(bar, {through: servis});
    bar.belongsToMany(boisson, {through: servis});
}

module.exports = { applyExtraSetup }