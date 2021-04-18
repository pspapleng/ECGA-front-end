import Vue from "vue";
import Vuex from "vuex";
import question from "../assets/test.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    json: question
  },
  mutations: {
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
  actions: {},
  modules: {}
});
