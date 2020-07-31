import getGQL from '../helpers/get-gql'
import actionPromise from './action-promise'


export default function actionGetOrdersPromise() {
    
    let promise = getGQL('http://localhost:3000/graphql/protected', { Authorization: `Bearer ${localStorage.getItem('userToken')}` })
        (`query getOrd{
            getOrders{
            id
            nameOrganization
            addressOrganization
            contactNumber
            orderWorks{
                    id
              nameWork
              foreman
            }
          }
        }`
        )
    return actionPromise('getOrders', promise)
}





// query getOrd($id:String!, 
//     $nameOrganization: String!,
//     $addressOrganization: String!,
//     $contactNumber: String!,
//     $status: String!,
//     $orderWorks:[
//          $id:String!,
//          $nameWork: String!,
//          $foreman: String!
//      ]){
// getOrders{
// id
// nameOrganization
// addressOrganization
// contactNumber
// status
// orderWorks{
//  id
//  nameWork
//  foreman
//  }
// }
// }