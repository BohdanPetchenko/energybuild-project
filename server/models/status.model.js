module.exports = (sequelize, Sequelize) => {

    class Status extends Sequelize.Model {

    }
    Status.init({
        id: {
            type: Sequelize.INTEGER,   
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        type: Sequelize.STRING,
    }, { sequelize, modelName: 'status' });

    return Status;
}