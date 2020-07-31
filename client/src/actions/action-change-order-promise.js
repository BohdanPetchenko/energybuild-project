import getGQL from '../helpers/get-gql'
import actionPromise from './action-promise'

export default function actionChangeStatusPromise(orderId, statusId) {

    let query = `mutation changeStatus($orderId: String!, $statusId:String!){
                    changeOrderStatus(orderStatusInput:{
                        orderId: $orderId,
                        statusId:$statusId
                }){
                    value
                    }
                }`
    let promise = getGQL('http://localhost:3000/graphql/protected', {Authorization:`Bearer ${localStorage.getItem('userToken')}`})
        (query, { orderId, statusId })
    return actionPromise('changeStatus', promise)
}