function applyExtraSetup(sequelize) {
    const { boisson, type_boisson, servis, bar} = sequelize.models;


    type_boisson.boisson=type_boisson.hasMany(boisson, {
        foreignKey: "typeId"
    })
    boisson.type_boisson=boisson.belongsTo(type_boisson);

    boisson.belongsToMany(bar, {through: servis});
    bar.belongsToMany(boisson, {through: servis});
}

module.exports = { applyExtraSetup }