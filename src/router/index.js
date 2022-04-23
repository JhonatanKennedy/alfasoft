import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import ContactView from "../views/Contacts/ContactView.vue";
import AboutView from "../views/About/AboutView.vue";
import ContactDetail from "../views/ContactDetail/ContactDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/:id",
    component: ContactDetail,
    props: { contact: {} },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
