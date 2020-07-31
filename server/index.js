var express = require('express');
var bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');

var db = require("./models");
const jwt = require('express-jwt')

const cors = require('cors');


var graphQLSchema = require('./graphql/schema');
var graphQLResolvers = require('./graphql/resolvers');
var { secretKey } = require('./config/auth.config');
var createRow = require("./helpers/create-row-in-model")
var initAdmin = require("./helpers/create-admin")
var initUser = require("./helpers/create-user")

require('dotenv').config();


const app = express();

const auth = jwt({
  secret: secretKey,
  algorithms: ['HS256'],
  credentialsRequired: true
})


app.use('/graphql/public', cors(), graphqlHTTP((request, response) => ({
  schema: graphQLSchema.public,
  rootValue: graphQLResolvers.public,
  graphiql: true,
  context: {
    request: request,
    response: response
  }
})))


app.use('/graphql/protected', cors(), auth,
  graphqlHTTP((request, response) => ({
    schema: graphQLSchema.protected,
    rootValue: graphQLResolvers.protected,
    graphiql: true,
    context: {
      request: request,
      response: response
    }
  })))

const Role = db.role;
const Status = db.status;
const Work = db.work;
const User = db.user;
const Order = db.order;


function main() {
  const port = process.env.PORT || 3000;


  db.sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
    initial();
  });

  async function initial() {

    createRow(Role, { name: 'user' })
    createRow(Role, { name: 'moderator' })
    createRow(Role, { name: 'admin' })
    createRow(Status, { type: 'new' })
    createRow(Status, { type: 'rejected' })
    createRow(Status, { type: 'inProgress' })
    createRow(Status, { type: 'done' })
    createRow(Work, { nameWork: 'cabling', foreman: 'John Snow' })
    createRow(Work, { nameWork: 'equipment installation', foreman: 'Tom Hardy' })
    createRow(Work, { nameWork: 'designing', foreman: 'Taylor Swift' })

    initAdmin({
      username: 'Bohdan',
      surname: 'Petchenko',
      password: '$2a$10$guzupQA6Bv5Y8NdpMyAjMeLaL2AXqB1yz0tnMRBS.KVpb/j2dIiDK',
      email: 'pechka24@gmail.com'
    },
      { name: "admin" })


    initUser({
      username: 'Lady',
      surname: 'Gaga',
      password: '$2a$10$guzupQA6Bv5Y8NdpMyAjMeLaL2AXqB1yz0tnMRBS.KVpb/j2dIiDK',
      email: 'gaga@gmail.com'
    },
      {
        name: "user"
      },
      {
        addressOrganization: 'Hollywood',
        contactNumber: "904224352",
        nameOrganization: "Films Corp."
      },
      {
        type: "new"
      })


    initUser({
      username: 'Ilon',
      surname: 'Mask',
      password: '$2a$10$guzupQA6Bv5Y8NdpMyAjMeLaL2AXqB1yz0tnMRBS.KVpb/j2dIiDK',
      email: 'spacex@gmail.com'
    },
      {
        name: "user"
      },
      {
        addressOrganization: 'NASA',
        contactNumber: "232534352",
        nameOrganization: "Space X"
      },
      {
        type: "new"
      })
  }

}
main();
