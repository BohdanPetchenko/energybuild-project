var db = require("../../../models");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { role, order, status } = require("../../../models");
var decodeToken = require("../../../helpers/decode-token")

async function getOrders(args, context) {
    const payload = decodeToken(context)
    //todo
    const id = payload.id;
    const email = payload.email;

    try {
        const user = await db.user.findOne({ where: { email } });

        if (!user) {
            throw new Error('Error');
        }

        let userOrders = await user.getOrders();
        let result = [];

        for (userOrder of userOrders) {
            let orderWorksList = await userOrder.getWorks();
            let resultOrderWorks = [];
            for (orderWork of orderWorksList) {
                resultOrderWorks.push({
                    id: orderWork.id,
                    nameWork: orderWork.nameWork,
                    foreman: orderWork.foreman
                });
            };
         
            let orderStatuses = await userOrder.getStatuses(); 
            debugger
            result.push({
                id: userOrder.id,
                nameOrganization: userOrder.nameOrganization,
                addressOrganization: userOrder.addressOrganization,
                contactNumber: userOrder.contactNumber,
                orderWorks: resultOrderWorks,
                status: {
                    id: orderStatuses.length > 0? orderStatuses[0].id : null,
                    type: orderStatuses.length > 0? orderStatuses[0].type : null
                }
            })
        }

        return result
    }
    catch (err) {
        debugger
        throw err;
    }
}
module.exports = {
    getOrders
}