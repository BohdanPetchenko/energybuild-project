import getGQL from '../helpers/get-gql'
import actionPromise from './action-promise'

export default function actionLoginPromise(email, password) {

    let query = `query Login($email: String!, $password:String!){
        loginUser(loginUserInput:{
            email: $email,
         password:$password,
      }){
        token
      }
    }`
    let promise = getGQL('http://localhost:3000/graphql/public')
        (query, { email, password })
    return actionPromise('login', promise)
}