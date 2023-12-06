import getters from './getters'
import { createStore } from "vuex";

//前台
import base from './modules/base';
import common from './modules/common';
import home from './modules/home';
import timeline from './modules/timeline';
import articleHome from './modules/articleHome';
import noteHome from './modules/noteHome';
import article from "./modules/article";
import book from "./modules/book";
import settings from "./modules/settings";

const store = createStore({
    state: {
        home_pic_index: Math.round((Math.random() * 2 + 1)) - 1
    },
    mutations: {
        increment(state, max) {
            if (max == null) {
                state.home_pic_index = 0;
            } else {
                state.home_pic_index = state.home_pic_index < max ? state.home_pic_index + 1 : 0;
            }
        }
    },
    actions: {
        changeHomePic(context, max) {
            context.commit("increment", max);
        }
    },
    modules: {
        //前台
        base,
        home,
        common,
        timeline,
        articleHome,
        noteHome,
        article,
        book,
        settings
    },
    getters
});

export default store
