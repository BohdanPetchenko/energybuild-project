import getGQL from '../helpers/get-gql'
import actionPromise from './action-promise'


export default function actionRegisterPromise(email, password, confirm, userName, surname) {
  debugger
  let promise = getGQL('http://localhost:3000/graphql/public')
    (`mutation Register($email:String!, $password:String!, $confirm:String!, $userName:String!, $surname:String!){
            registerUser(userInput:{
              username:$userName,
              surname:$surname,
              email:$email,
              password: $password,
              confirm:$confirm    
          }){
            value
          }
        }`, { email, password, confirm, userName, surname }
    )
  return actionPromise('register', promise)
}

