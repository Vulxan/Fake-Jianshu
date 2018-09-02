import * as actionTypes from "./constants";
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  trending_list: [],
  page: 1,
  totalPage: 1
});

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return prevState.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return prevState.set('focused', false);
    case actionTypes.CHANGE_TRENDING_LIST:
      return prevState.merge({
        'trending_list': action.list,
        'totalPage': action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return prevState.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return prevState.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return prevState.set('page', action.page)
    default:
      return prevState;
  }
}
