const sequelize = require('../config/database');
const User = require('./User');

const models = {
    User,
    sequelize
}

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models)
    }
})

module.exports = {
    sequelize,
    models
}