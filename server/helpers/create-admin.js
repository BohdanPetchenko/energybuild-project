var db = require("../models");

const Role = db.role;
const User = db.user;


async function initAdmin(row, role) {
    
    if (!await User.findOne({ where: row })) {
        let createdUser = await User.create(row);
        const userRole = await Role.findOne({ where: role });
        createdUser.addRole(userRole);
    }
}

module.exports = initAdmin