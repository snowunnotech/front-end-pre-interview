import axios from 'axios';
import router from './router';

export default {
  state: {
    strict: true,
  },
  mutations: {},
  actions: {
    toData(context, id) {
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com/${id}`;
      axios.get(api).then(() => {
        router.push(`/content${id}`);
      });
    },
    deletData(context, id) {
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com/${id}`;
      axios.delete(api).then(() => {
        router.go(0);
      });
    },
  },
  getters: {},
};
