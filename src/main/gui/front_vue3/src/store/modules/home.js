import {listBlogBaseInfo, listNoteBaseInfo, listBookBaseInfo,listDollInfo,allDollName} from '@/api'

export default {
    namespaced: true,
    state: {
        articles: [],
        books: [],
        notes: [],
        dolls: [],
        search_keywords: [],
    },
    mutations: {
        UPDATE_ARTICLES_BASE_INFO(state, articles) {
            state.articles = articles;
        },
        UPDATE_BOOKS_BASE_INFO(state, books) {
            state.books = books;
        },
        UPDATE_NOTES_BASE_INFO(state, notes) {
            state.notes = notes;
        },
        UPDATE_DOLLS_INFO(state, dolls) {
            state.dolls = dolls;
        },
        UPDATE_SEARCH_INFO(state, search_keywords) {
            state.search_keywords = search_keywords;
        },
        CLEAR_SEARCH_INFO(state) {
            state.search_keywords = [];
        }
    },
    actions: {
        // 获取文章基本信息
        GET_ARTICLES_BASE_INFO({state, commit}, params) {
            return new Promise((resolve, reject) => {
                listBlogBaseInfo(params).then((response) => {
                    commit('UPDATE_ARTICLES_BASE_INFO', response.rows);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        // 获取图书基本信息
        GET_BOOKS_BASE_INFO({state, commit}, params) {
            return new Promise((resolve, reject) => {
                listBookBaseInfo(params).then((response) => {
                    commit('UPDATE_BOOKS_BASE_INFO', response.rows);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        // 获取图书笔记基本信息
        GET_NOTES_BASE_INFO({state, commit}, params) {
            return new Promise((resolve, reject) => {
                listNoteBaseInfo(params).then((response) => {
                    commit('UPDATE_NOTES_BASE_INFO', response.data.results);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        // 获取人形完整信息
        GET_DOLLS_INFO({state, commit}, params) {
            return new Promise((resolve, reject) => {
                listDollInfo(params).then((response) => {
                    commit('UPDATE_DOLLS_INFO', response.data);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        // 获取搜索信息
        GET_SEARCH_INFO({state, commit}, params) {
            return new Promise((resolve, reject) => {
                allDollName(params).then((response) => {
                    commit('UPDATE_SEARCH_INFO', response.data);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
    }
}
