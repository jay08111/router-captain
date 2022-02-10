import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    userInfo: {},
    item: [],
  },
  mutations,
  actions,
  getters: {
    fetchAsk(state) {
      return state.ask;
    },
    fetchJobs(state) {
      return state.jobs;
    },
    fetchNews(state) {
      return state.news;
    },
    fetchUserInfo(state) {
      return state.userInfo;
    },
    fetchIndividualItem(state) {
      return state.item;
    },
  },
  modules: {},
});
