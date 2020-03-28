/*
 * @Description: In User Settings Edit
 * @Author: sailei
 * @Date: 2018-12-14 16:59:00
 */
import axios from "axios";
import qs from "qs";

import Vue from "vue";

const localUrl = "http://localhost:3000"; //开发环境

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.success) {
      return response.data;
    } else {
      Vue.$vux.toast.text(response.data.msg);
      return Promise.reject(response);
    }
  },
  error => {
    return Promise.resolve(error.response);
  }
);

export default {
  post(url, params) {
    url = localUrl + url;
    let timeout = 15000;
    let header = {
      "content-type": "application/x-www-form-urlencoded"
    };
    return axios({
      method: "post",
      url,
      data: params ? qs.stringify(params) : {},
      timeout: timeout,
      headers: header
    });
  },
  get(url, params) {
    url = localUrl + url;
    let timeout = 15000;
    let header = {
      "content-type": "application/x-www-form-urlencoded"
    };
    return axios({
      method: "get",
      url,
      params: params ? params : {},
      timeout: timeout,
      headers: header
    });
  }
};
