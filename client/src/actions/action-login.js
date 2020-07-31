import actionLoginPromise from './action-login-promise'
import actionToken from './action-token'

import {history} from "../history/index";
import d from "../helpers/d"



export default function actionLogin(login, password) {
    return async dispatch => {
       
        let ourToken = await dispatch(actionLoginPromise(login, password))
        if (ourToken){
            localStorage.setItem("userToken" , d`${ourToken}.data.loginUser.token`)
            history.push('/account')
            dispatch(actionToken(ourToken))  
        }
        else{
            history.push('/login')
        }
        
    }
}