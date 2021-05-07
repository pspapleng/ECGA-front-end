import Vue from "vue";
import Vuex from "vuex";
import question from "../assets/test.json";
import keep_ans from "../assets/ans.json";
import keep_results from "../assets/result.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    default_json: JSON.parse(JSON.stringify(question)),
    default_keep_ans: JSON.parse(JSON.stringify(keep_ans)),
    default_keep_results: JSON.parse(JSON.stringify(keep_results)),
    json: question,
    keep_ans: keep_ans,
    keep_result: keep_results,
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
    login: {
      username: "",
      password: ""
    },
    who_login: {
      n_id: 0,
      ID: "",
      n_fname: "",
      n_lname: "",
      username: ""
    },
    updateNurse: {
      id: "",
      n_fname: "",
      n_lname: "",
      username: "",
      old_password: "",
      new_password: "",
      confirm_password: ""
    },
    user: "",
    result_id: null,
    in_search: "",
    u_Data: [],
    UserId: 1,
    formFinish: [],
    checkForm: [],
    MNA: "",
    OCA: "",
    FallRisk: "",
    TUGT: "",
    EYES: "",
    TGDS15: "",
    IQCODE: "",
    MMSE: "",
    LTTA: "",
    UIA: "",
    SLEEP: "",
    KNEE: "",
    OSTA: ""
  },
  mutations: {
    resetKeepAns(state) {
      state.json = state.default_json;
    },
    setCheckForm(state, payload) {
      state.checkForm = payload;
    },
    resetCheckForm(state) {
      state.formFinish = [];
      state.checkForm = [];
    },
    setState(state, { name, value }) {
      state[name] = value;
    },
    setLogin(state, payload) {
      console.log(payload);
      state.login = payload;
    },
    resetLogin(state) {
      state.login = {
        username: "",
        password: ""
      };
    },
    setWhoLogin(state, payload) {
      state.who_login = payload;
    },
    resetWhoLogin(state) {
      state.who_login = {
        n_id: 0,
        ID: "",
        n_fname: "",
        n_lname: "",
        username: ""
      };
    },
    setUpdateNurse(state, payload) {
      state.updateNurse = payload;
    },
    resetUpdateNurse(state) {
      state.updateNurse = {
        id: "",
        n_fname: "",
        n_lname: "",
        username: "",
        old_password: "",
        new_password: "",
        confirm_password: ""
      };
    },
    setResultId(state, payload) {
      // console.log("in mutation", payload);
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
      // console.log(target);
      target.ans_value = payload.value;
      target.ans_title = payload.title;
      // target.u_id = payload.u_id;
      target.u_id = state.UserId;
      console.log(target);
    },
    setFormFinish(state, payload) {
      state.formFinish = payload;
    },
    //
    setMNA(state, payload) {
      state.MNA = payload;
      console.log(payload);
    },
    setOCA(state, payload) {
      state.OCA = payload;
      console.log(payload);
    },
    setFallRisk(state, payload) {
      state.FallRisk = payload;
      console.log(payload);
    },
    setTUGT(state, payload) {
      state.TUGT = payload;
      console.log(payload);
    },
    setEYES(state, payload) {
      state.EYES = payload;
      console.log(payload);
    },
    setTGDS15(state, payload) {
      state.TGDS15 = payload;
      console.log(payload);
    },
    setIQCODE(state, payload) {
      state.IQCODE = payload;
      console.log(payload);
    },
    setMMSE(state, payload) {
      state.MMSE = payload;
      console.log(payload);
    },
    setLTTA(state, payload) {
      state.LTTA = payload;
      console.log(payload);
    },
    setUIA(state, payload) {
      state.UIA = payload;
      console.log(payload);
    },
    setSLEEP(state, payload) {
      state.SLEEP = payload;
      console.log(payload);
    },
    setKNEE(state, payload) {
      state.KNEE = payload;
      console.log(payload);
    },
    setOSTA(state, payload) {
      state.OSTA = payload;
      console.log(payload);
    }
  },
  actions: {
    resetAns({ commit }) {
      commit("resetKeepAns");
    },
    createLogin({ state, commit, dispatch }) {
      // console.log(state.login);
      return Vue.axios
        .post(`http://localhost:3000/api/login`, state.login)
        .then(res => {
          console.log(res);
          const token = res.data.token;
          localStorage.setItem("token", token);
          dispatch("getWhoLogin");
          commit("resetLogin");
          return Promise.resolve();
        })
        .catch(e => {
          console.log(e.response.data);
          return Promise.reject(e.response.data);
        });
    },
    getWhoLogin({ commit }) {
      const token = localStorage.getItem("token");
      return Vue.axios
        .get(`http://localhost:3000/api/login/user/me`, {
          headers: { Authorization: "Bearer " + token }
        })
        .then(res => {
          console.log("whologin", res.data);
          commit("setWhoLogin", res.data);
        });
    },
    createLogout({ state, commit }) {
      return Vue.axios
        .delete(`http://localhost:3000/api/login/${state.who_login.n_id}`)
        .then(res => {
          console.log(res);
          localStorage.removeItem("token");
          commit("resetWhoLogin");
          return Promise.resolve();
        })
        .catch(e => {
          console.log(e.response.data);
          return Promise.reject(e.response.data);
        });
    },
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
    updateNurse({ state, commit }) {
      return Vue.axios
        .put(
          `http://localhost:3000/api/nurse/${state.who_login.n_id}`,
          state.updateNurse
        )
        .then(res => {
          console.log(res);
          commit("resetUpdateNurse");
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
      state.createUsers.n_id = state.who_login.n_id;
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
    getAllResultByUid({ state, commit }) {
      // console.log("in action", state.UserId);
      return Vue.axios
        .get(`http://localhost:3000/api/result/user/${state.UserId}`)
        .then(result => {
          commit("setAllResult", result.data);
          console.log(result.data);
          return Promise.resolve();
        });
    },
    getAns({ state, commit }) {
      // console.log("result _id", state.result_id);
      return Vue.axios
        .get(`http://localhost:3000/api/ans/${state.result_id}`)
        .then(ans => {
          console.log(ans.data.ans);
          commit("setUserFromAns", ans.data.user);
          commit("setAllAns", ans.data.ans);
          return Promise.resolve();
        });
    },
    getUser({ state, commit }) {
      // console.log("get user");
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
      return Vue.axios
        .get(`http://localhost:3000/api/users/${state.UserId}`)
        .then(user => {
          console.log(user);
          commit("setUserFromUId", user.data[0]);
        });
    },
    //
    submitAll({ state, commit, dispatch }) {
      return Vue.axios
        .post(`http://localhost:3000/api/result/`, {
          result: {
            MNA: state.MNA,
            OCA: state.OCA,
            FallRisk: state.FallRisk,
            TUGT: state.TUGT,
            EYES: state.EYES,
            TGDS15: state.TGDS15,
            IQCODE: state.IQCODE,
            MMSE: state.MMSE,
            LTTA: state.LTTA,
            UIA: state.UIA,
            SLEEP: state.SLEEP,
            KNEE: state.KNEE,
            OSTA: state.OSTA
          },
          u_id: state.UserId
        })
        .then(res => {
          dispatch("submitAns");
          commit("resetCheckForm");
          return Promise.resolve(res);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },
    submitAns({ state }) {
      return Vue.axios
        .post(`http://localhost:3000/api/ans/`, state.keep_ans)
        .then(res => {
          return Promise.resolve(res);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    }
  },
  modules: {}
});
