import Vue from "vue";
import Vuex from "vuex";
import question from "../assets/test.json";
import keep_ans from "../assets/ans.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    json: question,
    keep_ans: keep_ans,
    result: null,
    ans: null,
    owner: null,
    createNurse: {
      id: "",
      n_fname: "",
      n_lname: "",
      username: "",
      password: "",
      confirm_password: ""
    },
    createUsers: {
      u_fname: "",
      u_lname: "",
      gender: 0,
      date_of_birth: null,
      weight: 0,
      height: 0,
      bmi: 0,
      waistline: 0,
      fall_history: 0,
      n_id: null
    },
    u_id: 1,
    n_id: 1,
    user: "",
    result_id: 1,
    checklist: false,
    checkfrom: true,
    in_search: "",
    n_fname: "Taweewat",
    n_lname: "Srimek",
    u_Data: [],
    UserId: null
  },
  mutations: {
    setResultId(state, payload) {
      state.result_id = payload;
    },
    setSearch(state, payload) {
      state.in_search = payload;
    },
    setU_Data(state, payload) {
      state.u_Data = payload;
    },
    setAllResult(state, payload) {
      state.result = payload;
    },
    setAllAns(state, payload) {
      state.ans = payload;
    },
    setUserFromAns(state, payload) {
      state.owner = payload;
    },
    setUserFromUId(state, payload) {
      state.user = payload;
    },
    setCreateNurse(state, payload) {
      state.createNurse = payload;
    },
    resetCreateNurse(state) {
      state.createNurse = {
        id: "",
        n_fname: "",
        n_lname: "",
        username: "",
        password: "",
        confirm_password: ""
      };
    },
    setCreateUsers(state, payload) {
      state.createUsers = payload;
    },
    resetCreateUsers(state) {
      state.createUsers = {
        u_fname: "",
        u_lname: "",
        gender: 0,
        date_of_birth: null,
        weight: 0,
        height: 0,
        bmi: 0,
        waistline: 0,
        fall_history: 0,
        n_id: null
      };
    },
    setUserId(state, payload) {
      state.UserId = payload;
    },
    resetUserId(state) {
      state.UserId = null;
    },
    // set value for var ans
    setAns(state, payload) {
      let idd = payload.id;
      // console.log(payload);
      // console.log(idd);
      let target = state.keep_ans.find(e => e.ques_id === idd);
      // console.log(target)
      target.ans_value = payload.value;
      target.ans_title = payload.title;
      target.u_id = payload.u_id;
    }
  },
  actions: {
    createNurse({ state, commit }) {
      console.log("hi");
      console.log(state.createNurse);
      return Vue.axios
        .post(`http://localhost:3000/api/nurse`, state.createNurse)
        .then(res => {
          console.log(res);
          commit("resetCreateNurse");
          return Promise.resolve();
        })
        .catch(e => {
          console.log(e.response.data);
          return Promise.reject(e.response.data);
        });
    },
    createUsers({ state, commit }) {
      let year = new Date(state.createUsers.date_of_birth).getFullYear();
      let month = new Date(state.createUsers.date_of_birth).getMonth() + 1;
      let date = new Date(state.createUsers.date_of_birth).getDate();
      let formatDate = year + "-" + month + "-" + date;
      state.createUsers.date_of_birth = formatDate;
      state.createUsers.bmi = parseFloat(
        state.createUsers.weight / Math.pow(state.createUsers.height / 100, 2)
      ).toFixed(2);
      state.createUsers.n_id = state.n_id;
      console.log(state.createUsers);
      return Vue.axios
        .post(`http://localhost:3000/api/users`, state.createUsers)
        .then(res => {
          console.log(res);
          commit("resetCreateUsers");
          return Promise.resolve();
        })
        .catch(e => {
          console.log(e.response.data);
          return Promise.reject(e.response.data);
        });
    },
    getAllResult({ state, commit }) {
      // console.log("in action");
      Vue.axios
        .get(`http://localhost:3000/api/result/user/${state.result_id}`)
        .then(result => {
          console.log(result.data[0].result_id);
          commit("setAllResult", result.data);
        });
    },
    getAns({ state, commit }) {
      // console.log("in action");
      Vue.axios
        .get(`http://localhost:3000/api/ans/${state.result_id}`)
        .then(ans => {
          console.log(ans.data.ans);
          commit("setUserFromAns", ans.data.user);
          commit("setAllAns", ans.data.ans);
        });
    },
    getUser({ state, commit }) {
      console.log("get user");
      console.log(state.in_search);
      Vue.axios
        .get(`http://localhost:3000/api/users`, {
          params: {
            search: state.in_search
          }
        })
        .then(data => {
          commit("setU_Data", data.data);
        });
    },
    editUser({ state, commit }, payload) {
      return Vue.axios
        .put(`http://localhost:3000/api/users/${state.UserId}`, payload)
        .then(res => {
          commit("resetUserId");
          return Promise.resolve(res);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },
    deleteUser({ state, commit }) {
      return Vue.axios
        .delete(`http://localhost:3000/api/users/${state.UserId}`)
        .then(res => {
          commit("resetUserId");
          return Promise.resolve(res);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },
    getUserById({ state, commit }) {
      Vue.axios
        .get(`http://localhost:3000/api/users/${state.u_id}`)
        .then(user => {
          console.log(user.data[0]);
          commit("setUserFromUId", user.data[0]);
        });
    }
  },
  modules: {}
});
