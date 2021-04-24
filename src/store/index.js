import Vue from "vue";
import Vuex from "vuex";
import question from "../assets/test.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    json: question,
    result: null,
    createNurse: {
      id: "",
      n_fname: "",
      n_lname: "",
      username: "",
      password: "",
      confirm_pass: ""
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
    result_id: 1
  },
  mutations: {
    setResult(state, payload) {
      state.result = payload;
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
        confirm_pass: ""
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
    // set value for var ans
    setAns(state, payload) {
      let idd = payload.id;
      console.log(payload);
      console.log(idd);
      let target = state.json.find(e => e.ques_id === idd);
      target.ans = payload.value;
      console.log(payload.value);

      // const {id,value} = payload
      // let target = state.json.find(e=>e.ques_id === id)
      // Object.assign(target,{ans:parseInt(value)})
      // state.json.ans = parseInt(payload)
      console.log(state.json);
    }
  },
  actions: {
    createNurse({ state, commit }) {
      console.log(state.createNurse);
      return Vue.axios
        .post(`http://localhost:3000/api/nurse`, state.createNurse)
        .then(res => {
          console.log(res);
          commit("resetCreateNurse");
          return Promise.resolve();
        })
        .catch(e => {
          this.error = e.response.data.message;
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
      console.log(state.createUsers);
      return Vue.axios
        .post(`http://localhost:3000/api/users`, state.createUsers)
        .then(res => {
          console.log(res);
          commit("resetCreateUsers");
          return Promise.resolve();
        })
        .catch(e => {
          this.error = e.response.data.message;
          return Promise.reject(e.response.data);
        });
    },
    getResult({ commit }) {
      console.log("in action");
      Vue.axios.get(`http://localhost:3000/api/result/user/1`).then(result => {
        console.log(result.data);
        commit("setResult", result.data);
      });
    }
  },
  modules: {}
});
