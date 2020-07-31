var db = require("../../../models");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { role } = require("../../../models");
var {secretKey} = require('../../../config/auth.config');

async function loginUser(args, context) {
    try {
        const {
            email,
            password,
        } = args.loginUserInput;

        const user = await db.user.findOne({ where: { email } });
        if (!user) {
            throw new Error('Email or password is incorrect');
        }
        const isPasswordCorrect = await bcrypt.compareSync(password, user.password);

        if(!isPasswordCorrect){
            throw new Error('Email or password is incorrect');
        }

        const userRoles = await user.getRoles();

        
        const token = jwt.sign({
            id: user.id,
            userName: user.username,
            surname: user.surname,
            roles: userRoles.map((item) =>item.name),
            email: user.email,
            exp: Math.floor(new Date().getTime()/1000) + 7*24*60*60*60 // generate token with some expiration time
          }, secretKey); 
        
        return {
            token
        }
    }
    catch (err) {
        debugger
        throw err;
    }
}

module.exports = {
    loginUser
}