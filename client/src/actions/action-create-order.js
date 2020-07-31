import actionCreateOrderPromise from './action-create-order-promise'
import {history} from "../history/index";



export default function actionCreateOrder(nameOrganization, addressOrganization, contactNumber, orderWorks) {
    debugger
    return async dispatch => {
        
        let ourToken = await dispatch(actionCreateOrderPromise(nameOrganization, addressOrganization, contactNumber, orderWorks[0]))
        if (ourToken){            
            history.push('/account/myorders')            
        }
        else{
            history.push('/account')
        }
        
    }
}