var db = require("../models");

const Role = db.role;
const Status = db.status;
const Work = db.work;
const User = db.user;


async function initUser(row, role, orderData, statusData) {

    if (!await User.findOne({ where: row })) {

        let createdUser = await User.create(row);
        const userRole = await Role.findOne({ where: role });
        createdUser.addRole(userRole);
        let createdOrder = await createdUser.createOrder(orderData);
        const works = await Work.findAll();
        for (let work of works) {
            await createdOrder.addWork(work);
        }
        let newStatus = await Status.findOne({ where: statusData });
        await createdOrder.addStatus(newStatus);

    }
}

module.exports = initUser