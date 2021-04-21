import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/test.vue")
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue")
  },
  {
    path: "/historypatient",
    name: "Historypatient",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "historypatient" */ "../views/historypatient.vue"
      )
  },
  {
    path: "/namelist",
    name: "Namelist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "patient" */ "../views/namelist.vue")
  },
  {
    path: "/CreateAccNurse",
    name: "CreateAccNurse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CreateAccNurse" */ "../views/CreateAccNurse.vue"
      )
  },
  {
    path: "/patientlist",
    name: "PatientList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CreateAccNurse" */ "../views/patientlist.vue"
      )
  },
  {
    path: "/CreateAccUser",
    name: "CreateAccUser",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CreateAccNurse" */ "../views/CreateAccUser.vue"
      )
  },
  {
    path: "/sidebar",
    name: "Sidebar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sidebar" */ "../components/sidebar.vue")
  },
  {
    path: "/startpage",
    name: "startpage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "startpage" */ "../views/startpage.vue")
  },
  {
    path: "/mnaAss",
    name: "mnaAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mnaAss" */ "../views/mnaAss.vue")
  },
  {
    path: "/mouthAss",
    name: "mouthAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mouthAss" */ "../views/mouthAss.vue")
  },
  {
    path: "/fallRisk",
    name: "fallRisk",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "fallRisk" */ "../views/fallRisk.vue")
  },
  {
    path: "/tugtAss",
    name: "tugtAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tugtAss" */ "../views/tugtAss.vue")
  },
  {
    path: "/eyeAss",
    name: "eyeAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "eyeAss" */ "../views/eyeAss.vue")
  },
  {
    path: "/tgdsAss",
    name: "tgdsAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tgdsAss" */ "../views/tgdsAss.vue")
  },
  {
    path: "/iqCode",
    name: "iqCode",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "iqCode" */ "../views/iqCode.vue")
  },
  {
    path: "/mmseAss",
    name: "mmseAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mmseAss" */ "../views/mmseAss.vue")
  },
  {
    path: "/longtermAss",
    name: "longtermAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "longtermAss" */ "../views/longtermAss.vue")
  },
  {
    path: "/toiletAss",
    name: "toiletAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "toiletAss" */ "../views/toiletAss.vue")
  },
  {
    path: "/sleepAss",
    name: "sleepAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sleepAss" */ "../views/sleepAss.vue")
  },
  {
    path: "/brokenAss",
    name: "brokenAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "brokenAss" */ "../views/brokenAss.vue")
  },
  {
    path: "/bonyAss",
    name: "bonyAss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "bonyAss" */ "../views/bonyAss.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
