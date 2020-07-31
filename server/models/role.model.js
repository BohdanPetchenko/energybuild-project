module.exports = (sequelize, Sequelize) => {

    class Roles extends Sequelize.Model {

    }
    Roles.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: Sequelize.STRING,
    }, { sequelize, modelName: 'roles' });

    return Roles;
}