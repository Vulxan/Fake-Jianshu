import { fromJS } from 'immutable';
import * as actionTypes from "./constants";

const defaultState = fromJS({
  loginStatus: false,
  act: '',
  psw: ''
});

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ACT:
      return prevState.set('act', action.act);
    case actionTypes.CHANGE_PSW:
      return prevState.set('psw', action.psw);
    case actionTypes.LOGIN_STATUS_SUCC:
      return prevState.set('loginStatus', true);
    case actionTypes.LOGOUT:
      return prevState.set('loginStatus', false);
    default:
      return prevState;
  }
}
