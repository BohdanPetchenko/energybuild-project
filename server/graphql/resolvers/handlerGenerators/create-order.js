var db = require("../../../models");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { role, order, work, status } = require("../../../models");
var decodeToken = require("../../../helpers/decode-token")

async function createOrder(args, context) {
       
    const payload = decodeToken(context)
    //todo
    const id = payload.id;
    const email = payload.email;
    
    try {
        const {
            addressOrganization,
            contactNumber,
            nameOrganization,
            orderWorks
        } = args.orderInput;

        
        const user = await db.user.findOne({ where: { email } });

        if (!user) {
            throw new Error('Error');
        }

        let createdOrder = await user.createOrder({
            addressOrganization,
            contactNumber,
            nameOrganization
          });

        for(workId of orderWorks){
            const work = await db.work.findByPk(workId);
            await createdOrder.addWork(work);
        }

        let newStatus = await db.status.findOne({ where: { type: "new" } });

        await createdOrder.addStatus(newStatus);
        
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
    createOrder
}