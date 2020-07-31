import getGQL from '../helpers/get-gql'
import actionPromise from './action-promise'


export default function actionCreateOrderPromise(nameOrganization, addressOrganization, contactNumber, orderWorks) {
    debugger
    let promise = getGQL('http://localhost:3000/graphql/protected', {Authorization:`Bearer ${localStorage.getItem('userToken')}`})
        (`mutation createOrder($nameOrganization:String!, 
                               $addressOrganization:String!,
                               $contactNumber:String!,
                               $orderWorks: [String]!){
        createOrder(orderInput:{
          nameOrganization: $nameOrganization
          addressOrganization: $addressOrganization
          contactNumber: $contactNumber
          orderWorks: $orderWorks
          
        }){
          value
        }
      }`, { nameOrganization, addressOrganization, contactNumber, orderWorks }
        )
    return actionPromise('createOrder', promise)
}

