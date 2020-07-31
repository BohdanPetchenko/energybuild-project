module.exports = (sequelize, Sequelize) => {

    class User extends Sequelize.Model {

    }
    User.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: Sequelize.STRING,
        surname: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING
    }, { sequelize, modelName: 'user' })

    return User;
}