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
    path: "/startpage",
    name: "startpage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "startpage" */ "../views/startpage.vue")
  },
  {
    path: "/forms/form1",
    name: "forms/form1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form1" */ "../views/forms/form1.vue")
  },
  {
    path: "/forms/form2",
    name: "forms/form2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form2" */ "../views/forms/form2.vue")
  },
  {
    path: "/forms/form3",
    name: "forms/form3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form3" */ "../views/forms/form3.vue")
  },
  {
    path: "/forms/form4",
    name: "forms/form4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form4" */ "../views/forms/form4.vue")
  },
  {
    path: "/forms/form5",
    name: "forms/form5",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form5" */ "../views/forms/form5.vue")
  },
  {
    path: "/forms/form6",
    name: "forms/form6",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form6" */ "../views/forms/form6.vue")
  },
  {
    path: "/forms/form7",
    name: "forms/form7",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form7" */ "../views/forms/form7.vue")
  },
  {
    path: "/forms/form8",
    name: "forms/form8",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form8" */ "../views/forms/form8.vue")
  },
  {
    path: "/forms/form9",
    name: "forms/form9",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form9" */ "../views/forms/form9.vue")
  },
  {
    path: "/forms/form10",
    name: "forms/form10",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form10" */ "../views/forms/form10.vue")
  },
  {
    path: "/forms/form11",
    name: "forms/form11",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form11" */ "../views/forms/form11.vue")
  },
  {
    path: "/forms/form12",
    name: "forms/form12",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form12" */ "../views/forms/form12.vue")
  },
  {
    path: "/forms/form13",
    name: "forms/form13",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms/form13" */ "../views/forms/form13.vue")
  },
  {
    path: "/Result",
    name: "Result",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "bonyAss" */ "../views/Result.vue")
  },
  {
    path: "/results/result1",
    name: "results/result1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result1" */ "../views/results/result1.vue"
      )
  },
  {
    path: "/results/result2",
    name: "results/result2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result2" */ "../views/results/result2.vue"
      )
  },
  {
    path: "/results/result3",
    name: "results/result3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result3" */ "../views/results/result3.vue"
      )
  },
  {
    path: "/results/result4",
    name: "results/result4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result4" */ "../views/results/result4.vue"
      )
  },
  {
    path: "/results/result5",
    name: "results/result5",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result5" */ "../views/results/result5.vue"
      )
  },
  {
    path: "/results/result6",
    name: "results/result6",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result6" */ "../views/results/result6.vue"
      )
  },
  {
    path: "/results/result7",
    name: "results/result7",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result7" */ "../views/results/result7.vue"
      )
  },
  {
    path: "/results/result8",
    name: "results/result8",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result8" */ "../views/results/result8.vue"
      )
  },
  {
    path: "/results/result9",
    name: "results/result9",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result9" */ "../views/results/result9.vue"
      )
  },
  {
    path: "/results/result10",
    name: "results/result10",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result10" */ "../views/results/result10.vue"
      )
  },
  {
    path: "/results/result11",
    name: "results/result11",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result11" */ "../views/results/result11.vue"
      )
  },
  {
    path: "/results/result12",
    name: "results/result12",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result12" */ "../views/results/result12.vue"
      )
  },
  {
    path: "/results/result13",
    name: "results/result13",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "results/result13" */ "../views/results/result13.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
