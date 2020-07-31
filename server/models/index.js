const Sequelize = require("sequelize");

const sequelize = require("../config/db.config.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.work = require("./work.model.js")(sequelize, Sequelize);
db.order = require("./order.model.js")(sequelize, Sequelize);
db.status = require("./status.model.js")(sequelize, Sequelize);


db.user.hasMany(db.order);
db.order.belongsTo(db.user);

userRole = sequelize.define('user_role', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
});

db.user.belongsToMany(db.role, { through: userRole });
db.role.belongsToMany(db.user, { through: userRole });


orderWorks = sequelize.define('order_works', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
});

db.order.belongsToMany(db.work, { through: orderWorks });
db.work.belongsToMany(db.order, { through: orderWorks });


statusOrder = sequelize.define('status_order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
});

db.status.belongsToMany(db.order, { through: statusOrder });
db.order.belongsToMany(db.status, { through: statusOrder });

db.ROLES = ["user", "admin", "moderator"];


module.exports = db;
