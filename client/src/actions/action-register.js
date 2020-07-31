import actionLogin from './action-login'
import actionRegisterPromise from './action-register-promise'



export default function actionRegister(email, password, confirm, userName, surname) {
    debugger
    return async dispatch => {
        let user = await dispatch( await actionRegisterPromise(email, password, confirm, userName, surname))
        if (user) {
            dispatch(actionLogin(email, password))
        }

    }
}