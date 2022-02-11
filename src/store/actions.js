import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchIndividualItem,
  fetchList,
} from "../api/index";

export default {
  async FETCH_NEWS({ commit }) {
    try {
      const res = await fetchNewsList();
      commit("setNews", res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_JOBS({ commit }) {
    try {
      const res = await fetchJobsList();
      commit("setJobs", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    try {
      const res = await fetchAskList();
      commit("setAsk", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_USERINFO({ commit }, name) {
    try {
      const res = await fetchUserInfo(name);
      commit("setUserInfo", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_INDIVIDUAL_ITEM({ commit }, id) {
    try {
      const res = await fetchIndividualItem(id);
      commit("setItem", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const res = await fetchList(pageName);
      commit("setList", res.data);
    } catch (error) {
      console.log(error);
    }
  },
};
