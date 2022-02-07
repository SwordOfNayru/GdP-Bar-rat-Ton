function applyExtraSetup(sequelize) {
    const { boisson, type_boisson, servis, bar } = sequelize.models;

    boisson.type_boisson = boisson.belongsTo(type_boisson);

    boisson.belongsToMany(bar, { through: { model: servis, unique: false } });
    bar.belongsToMany(boisson, { through: { model: servis, unique: false } });
}

module.exports = { applyExtraSetup };
