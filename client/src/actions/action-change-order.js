import actionChangeStatusPromise from './action-change-order-promise'
import actionToken from './action-token'

import {history} from "../history/index";
import d from "../helpers/d"



export default function actionChangeStatus(orderId, statusId) {
    return async dispatch => {
       
        await dispatch(actionChangeStatusPromise(orderId, statusId))        
        history.push('/account/all-users')
       
        
    }
}