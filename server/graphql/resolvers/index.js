var { registerUser } = require('./handlerGenerators/register');
var { loginUser } = require('./handlerGenerators/login');
var { createOrder } = require('./handlerGenerators/create-order');
var { getOrders } = require('./handlerGenerators/get-orders');
var { getAllUsers } = require('./handlerGenerators/get-all-users');

module.exports = { public: {registerUser, loginUser}, protected: { createOrder, getOrders, getAllUsers}}