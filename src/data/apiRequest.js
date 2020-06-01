import axios from "axios";

const axiosOtherApiConfig = { // All aother APi
  headers: {
    "Content-Type": "application/json"
  }
}

export const axiosGet = function (URL, params) {
  return axios.get(`${URL}`, axiosOtherApiConfig);
};


export const axiosGetWithID = function (URL, params) {
  return axios.get(`${URL}`, axiosOtherApiConfig);
};