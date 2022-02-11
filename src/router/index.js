import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/ask",
    name: "ask",
    component: createListView("AskView"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: createListView("JobsView"),
  },
  {
    path: "/news",
    name: "news",
    component: createListView("NewsView"),
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
