import {listDollInfo} from '@/api'

export default {
    namespaced: true,
    state: {
        dolls: [],
    },
    mutations: {
        UPDATE_DOLLS_INFO(state, dolls) {
            state.dolls = dolls;
        },
        CLEAR_DOLLS_INFO(state) {
            state.dolls = {};
        }
    },
    actions: {
        // 获取人形信息
        GET_DOLLS_INFO({state, commit}, params) {
            return new Promise((resolve, reject) => {
                listDollInfo(params).then((response) => {
                    commit('UPDATE_DOLLS_INFO', response.rows);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
    }
}
