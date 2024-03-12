export default {
    namespace: 'index',
    state: {
        count: 0,
    },
    effect: {
        * setCountAction({payload}, {put}) {
            yield put({
                type: 'changeCount',
                payload,
            })
        }
    },
    reducers: {
        changeCount(state, {payload}) {
            return {
                ...state,
                count: payload.count
            }
        }
    }
}