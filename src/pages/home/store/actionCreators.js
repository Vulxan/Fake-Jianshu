import * as actionTypes from "./constants";
import Axios from "axios";

export const getHomeData = () => {
  return (dispatch) => {
    Axios.get('api/home.json')
    .then((res) => {
      const data = res.data.data;
      const action = {
        type: actionTypes.GET_HOME_DATA,
        data
      }
      dispatch(action);
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    Axios.get(`api/homeList.json?page=${page}`)
    .then((res) => {
      const data = res.data.data;
      const action = {
        type: actionTypes.GET_MORE_LIST,
        data,
        page: page + 1
      }
      dispatch(action);
    })
  }
}

export const showBackTop = () => ({
  type: actionTypes.SHOW_BACK_TOP
})

export const hideBackTop = () => ({
  type: actionTypes.HIDE_BACK_TOP
})
