const state = {
    /**
     * 备案号
     */
    F_ICP: '苏ICP备 20018654',
    F_Title: 'BlueCitizens',
    F_Title_Desc: 'Create love & peace (>w<)',
    /**
     * 版权
     */
    F_Copyright: "All rights reserved.  © 2019 - 2020  CC BY-NC 4.0",
    F_Copyright_Desc: "BlueCitizen created for love & peace (>w<)",
    F_Copyright_Desc_En: " 温柔且正确的人总是难以生存，因为这个世界既不温柔，也不正确。 ",
};

const mutations = {
    CHANGE_SETTING: (state, {key, value}) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
};

const actions = {
    changeSetting({commit}, data) {
        commit('CHANGE_SETTING', data)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

