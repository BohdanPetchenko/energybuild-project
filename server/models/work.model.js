module.exports = (sequelize, Sequelize) => {

    class Work extends Sequelize.Model {

    }
    Work.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nameWork: Sequelize.STRING,
        foreman: Sequelize.STRING
    }, { sequelize, modelName: 'work' });

    return Work;
}