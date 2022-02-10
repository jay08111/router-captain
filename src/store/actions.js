import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchIndividualItem,
} from "../api/index";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList().then((res) => commit("setNews", res.data));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList().then((res) => commit("setJobs", res.data));
  },
  FETCH_ASK({ commit }) {
    fetchAskList().then((res) => commit("setAsk", res.data));
  },
  FETCH_USERINFO({ commit }, name) {
    fetchUserInfo(name).then((res) => commit("setUserInfo", res.data));
  },
  FETCH_INDIVIDUAL_ITEM({ commit }, id) {
    fetchIndividualItem(id).then((res) => commit("setItem", res.data));
  },
};
