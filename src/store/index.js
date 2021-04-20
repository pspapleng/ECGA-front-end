import Vue from "vue";
import Vuex from "vuex";
import question from "../assets/test.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    json: question,
    createNurse: {
      id: "",
      n_fname: "",
      n_lname: "",
      username: "",
      password: "",
      confirm_pass: ""
    },
    createUsers: {
      id: "",
      u_fname: "",
      u_lname: "",
      gender: "",
      date_of_birth: null,
      weight: "",
      height: "",
      waistline: "",
      fall_history: ""
    }
  },
  mutations: {
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
    }
  },
  modules: {}
});
