module.exports = (sequelize, Sequelize) => {

    class Order extends Sequelize.Model {

    }
    Order.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nameOrganization: Sequelize.STRING,   
        addressOrganization: Sequelize.STRING,
        contactNumber: Sequelize.STRING
    }, { sequelize, modelName: 'order' });

    return Order;
}