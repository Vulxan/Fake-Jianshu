import { fromJS } from 'immutable';
import * as actionTypes from "./constants";

const defaultState = fromJS({
  title: "",
  user: "",
  avatar: "",
  meta: "",
  content: ""
});

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL_DATA:
      return prevState.merge({
        title: fromJS(action.data.title),
        user: fromJS(action.data.user),
        avatar: fromJS(action.data.avatar),
        meta: fromJS(action.data.meta),
        content: fromJS(action.data.content)
      })
    default:
      return prevState;
  }
}