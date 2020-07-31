module.exports = function actionPromise(name, promise) {
    const actionPending = () => ({
        type: 'PROMISE',
        status: 'PENDING',
        name,
        payload: null,
        error: null
    })
    const actionResolved = payload => ({
        type: 'PROMISE',
        status: 'RESOLVED',
        name,
        payload,
        error: null
    })

    const actionRejected = error => ({
        type: 'PROMISE',
        status: 'REJECTED',
        name,
        payload: null,
        error
    })


    return async dispatch => {
        dispatch(actionPending())
        try {
            let payload = await promise
            dispatch(actionResolved(payload))
            return payload
        }
        catch (error) {
            dispatch(actionRejected(error))
        }
    }
}