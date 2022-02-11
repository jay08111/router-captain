import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import NewsView from "../views/NewsView";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/ask",
    name: "ask",
    // component: createListView("AskView"),
    component: AskView,
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");
      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => {
          bus.$emit("end:spinner");
          next();
        })
        .catch((err) => console.log(err));
    },
  },
  {
    path: "/jobs",
    name: "jobs",
    // component: createListView("JobsView"),
    component: JobsView,
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");
      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => {
          bus.$emit("end:spinner");
          next();
        })
        .catch((err) => console.log(err));
    },
  },
  {
    path: "/news",
    name: "news",
    // component: createListView("NewsView"),
    component: NewsView,
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");
      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => {
          bus.$emit("end:spinner");
          next();
        })
        .catch((err) => console.log(err));
    },
  },
  {
    path: "/user/:id",
    component: UserView,
  },
  {
    path: "/item/:id",
    component: ItemView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
