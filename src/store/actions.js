import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchIndividualItem,
  fetchList,
} from "../api/index";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList().then((res) => {
      commit("setNews", res.data);
      return res;
    });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList().then(({ data }) => commit("setJobs", data));
  },
  FETCH_ASK({ commit }) {
    fetchAskList().then(({ data }) => commit("setAsk", data));
  },
  FETCH_USERINFO({ commit }, name) {
    fetchUserInfo(name).then(({ data }) => commit("setUserInfo", data));
  },
  FETCH_INDIVIDUAL_ITEM({ commit }, id) {
    fetchIndividualItem(id).then(({ data }) => commit("setItem", data));
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName).then(({ data }) => commit("setList", data));
  },
};
