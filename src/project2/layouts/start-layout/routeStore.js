export default {
    namespaced: true,
    state: {
        route: {},
        inAdmin: false,
        headerH: 70,
    },

    getters: {
        headerH(state) {
            return state.headerH;
        },
        getModule(state) {
            return state.route["params"]
                ? state.route["params"]["module"]
                : "no module";
        },
        getPage(state) {
            return state.route["params"]
                ? state.route["params"]["content"]
                : "no page";
        },
        tableSlug(state) {
            return state.route["params"]
                ? state.route["params"]["table"]
                : "no table";
        },
        listSlug(state) {
            return state.route["params"]
                ? state.route["params"]["list"]
                : "no list";
        },
        inAdmin(state) {
            return state.inAdmin;
        },

        recordSlug(state) {
            return state.route["params"]
                ? state.route["params"]["record"]
                : "no table";
        },
        newQuery(state) {
            if (state.route["query"]) {
                if (state.route["query"]["new"] === "true") {
                    return true;
                } else return false;
            } else {
                return false;
            }
        },
        editQuery(state) {
            if (state.route["query"]) {
                if (state.route["query"]["edit"] === "true") {
                    return true;
                } else return false;
            } else {
                return false;
            }
        },
        getParams(state) {
            return state.route["params"] ? state.route["params"] : {};
        },
        getQuery(state) {
            return state.route["query"] ? state.route["query"] : {};
        },
    },
    mutations: {
        setRoute(state, payload) {
            state.route = payload;
        },
        setInAdmin(state, payload) {
            state.inAdmin = payload;
            if (payload) {
                state.headerH = 100;
            } else {
                state.headerH = 70;
            }
        },
    },
    actions: {
        changeRoute({ commit }, route) {
            commit("setRoute", route);
        },
    },
};
