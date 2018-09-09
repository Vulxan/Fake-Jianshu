import * as actionTypes from "./constants";
import Axios from "axios";

export const changeAct = (act) => ({
  type: actionTypes.CHANGE_ACT,
  act
})

export const changePsw = (psw) => ({
  type: actionTypes.CHANGE_PSW,
  psw
})

const loginSucc = () => ({
  type: actionTypes.LOGIN_STATUS_SUCC
})

export const login = (act, psw) => {
  return (dispatch) => {
    Axios.get(process.env.PUBLIC_URL + `api/login.json?act=${act}&psw=${psw}`)
    .then((res) => {
      const loginStatus = res.data.loginStatus;
      if (loginStatus) {
        dispatch(loginSucc());
      } else {
        console.log('fail');
      }
    });
  }
}

export const logout = () => ({
  type: actionTypes.LOGOUT
})
