var db = require("../../../models");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { role, order, status, user } = require("../../../models");
var decodeToken = require("../../../helpers/decode-token")

async function getAllUsers(args, context) {
    const payload = decodeToken(context)

    if (!payload.roles.includes('admin')) throw new Error('Access denied');
    //todo
    const id = payload.id;
    const email = payload.email;

    try {
        const users = await db.user.findAll();

        if (!users) {
            throw new Error('Error');
        }

        let result = [];
        
        for (let user of users) {
            let resUserRole = [];
            let userRoles = await user.getRoles()

            let resUserOrders = [];
            let userOrders = await user.getOrders();            

            

            for( let role of userRoles){
                
                resUserRole.push(
                    role.name
                )
            }


            for (let userOrder of userOrders) {

                let resOrderWorks = [];
                
                let orderWorks = await userOrder.getWorks()
                let orderStatuses = await userOrder.getStatuses();
                for (let work of orderWorks) {

                    resOrderWorks.push({
                        id: work.id,
                        nameWork: work.nameWork,
                        foreman: work.foreman
                    });
                }
                resUserOrders.push({
                    id: userOrder.id,
                    nameOrganization: userOrder.nameOrganization,
                    addressOrganization: userOrder.addressOrganization,
                    contactNumber: userOrder.contactNumber,
                    orderWorks: resOrderWorks,
                    status: {
                        id: orderStatuses.length > 0 ? orderStatuses[0].id : null,
                        type: orderStatuses.length > 0 ? orderStatuses[0].type : null
                    }
                })
            }
            result.push({
                id: user.id,
                userName: user.username,
                surname: user.surname,
                email: user.email,
                role: resUserRole,
                orders: resUserOrders
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
    getAllUsers
}