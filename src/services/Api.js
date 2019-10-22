import axios from "axios";

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_APIBASEURL,
    accept: "application/ld+json"
  });
};
