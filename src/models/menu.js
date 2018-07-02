import * as menuService from '../services/menu'

export default {

    namespace: 'menu',

    state: {
        data: []
    },

    subscriptions: {
        setup({ dispatch, history }) {
            dispatch({ type: 'fetch', payload: { role: 'admin' } });
        },
    },

    effects: {
        *fetch({ payload: { role = 'admin' } }, { call, put }) {
            const { data } = yield call(menuService.fetch, { role });
            console.log('data', data);
            yield put({
                type: 'save',
                payload: {
                    data,
                },
            });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
