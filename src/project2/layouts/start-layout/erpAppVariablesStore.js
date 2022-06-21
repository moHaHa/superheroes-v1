import { isEmpty } from "lodash";
export default {
    namespaced: true,
    state: {
        activeHeaderModule: {},
        activeContentModule: {},
        activeTable:{},
        sideLeftLayoutObject: {},
        sideLeftContentObject: {},
        lang: [
          {
            word: 'article',
            words: 'articles',
            the_word: 'the article',
            the_words: 'the articles',
            word_ar: 'مقالة',
            words_ar: 'مقالات',
            the_word_ar: 'المقالة',
            the_words_ar: 'المقالات'
          },
          {
            word: 'course',
            words: 'courses',
            the_word: 'the course',
            the_words: 'the courses',
            word_ar: 'كورس',
            words_ar: 'كورسات',
            the_word_ar: 'الكورس',
            the_words_ar: 'الكورسات'
          },
          {
            word: 'playlist',
            words: 'playlists',
            the_word: 'the playlist',
            the_words: 'the playlists',
            word_ar: 'قائمة تشغيل',
            words_ar: 'قوائم التشغيل',
            the_word_ar: 'القائمة',
            the_words_ar: 'قوائم التشغيل'
          }
        ],
        baseAppPathRoute: "/rendering/app",
    },
    getters: {
        activeHeaderModule(state) {
            return state.activeHeaderModule;
        },
        activeHeaderModuleIsEmpty(state) {
            return isEmpty(state.activeHeaderModule);
        },
        activeContentModule(state) {
            return state.activeContentModule;
        },
        activeTable(state) {
            return state.activeTable;
        },
        baseAppPathRoute(state) {
            return state.baseAppPathRoute;
        },
    },
    mutations: {
        setActiveHeaderModule(state, payload) {
            state.activeHeaderModule = payload;
        },
        setActiveContentModule(state, payload) {
            state.activeContentModule = payload;
        },
        setActiveTable(state, payload) {
            state.activeTable = payload;
        },
        setSideLeftLayoutObject(state, payload) {
            state.sideLeftLayoutObject = payload;
        },
        setSideLeftContentObject(state, payload) {
            state.sideLeftContentObject = payload;
        },
    },
    actions: {
        changeActiveHeaderModule({ commit }, objModule) {
            commit("setActiveHeaderModule", objModule);
        },
        changeActiveContentModule({ commit }, objModule) {
            commit("setActiveContentModule", objModule);
        },
        changeActiveTable({ state, commit }, payload) {
            let obj = state.lang.find((el) => el.word === payload);
            commit('setActiveTable' , obj)
        },
        changeSideLeftLayoutObject() {},
        changeSideLeftContentObject() {},
    },
};
