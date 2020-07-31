var db = require("../../../models");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { role } = require("../../../models");

async function registerUser(args) {
    try {
        const {
            username,
            surname,
            email,
            password,
            confirm
        } = args.userInput;
        debugger
        const existingUser = await db.user.findOne({ where: { email } });
        if (existingUser) {
            throw new Error(`User with this login already exists!`);
        }
        if (password !== confirm) {
            throw new Error('Passwords are inconsistent!');
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await db.user.create({
            username,
            surname,
            email,
            password: hashedPassword
        });

        const userRole = await db.role.findOne({ where: { name: "user" } });

        user.addRole(userRole);

        user.save();

        return {
            value: "Success"
        }
    }
    catch (err) {
        
        throw err;
    }
}

module.exports = {
    registerUser
}