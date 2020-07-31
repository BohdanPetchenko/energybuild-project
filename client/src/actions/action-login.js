import actionLoginPromise from './action-login-promise'
import actionToken from './action-token'

import {history} from "../history/index";
import d from "../helpers/d"



export default function actionLogin(login, password) {
    return async dispatch => {
       
        let result = await dispatch(actionLoginPromise(login, password))
        debugger
        if (result.data.loginUser !== null){
            localStorage.setItem("userToken" , d`${result}.data.loginUser.token`)
            history.push('/account')
            dispatch(actionToken(result))  
        }
        else{
            history.push('/login')
        }
        
    }
}