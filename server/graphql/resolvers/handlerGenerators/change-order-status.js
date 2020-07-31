var db = require("../../../models");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { role, order, work, status } = require("../../../models");
var decodeToken = require("../../../helpers/decode-token")

async function changeOrderStatus(args, context) {
       
    const payload = decodeToken(context)
    //todo
    const id = payload.id;
    const email = payload.email;
    
    try {
        const {
            orderId,
            statusId
        } = args.orderStatusInput;

        debugger
        const order = await db.order.findByPk(orderId);

        if (!order) {
            throw new Error('Error');
        }
        
        let newStatus = await db.status.findByPk(statusId);

        await order.setStatuses(newStatus);
        
        return {
            value: "Ok"
        }
    }
    catch (err) {
        debugger
        throw err;
    }
}
module.exports = {
    changeOrderStatus
}