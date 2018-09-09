import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import Axios from 'axios';

const changeTrendingList = (list) => ({
  type: actionTypes.CHANGE_TRENDING_LIST,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const getTrendingList = () => (dispatch) => {
  Axios.get(process.env.PUBLIC_URL + '/api/trendingList.json')
  .then((res) => {
    const data = res.data;
    if (data.suc) {
      dispatch(changeTrendingList(data.data));
    }
  })
  .catch((e) => {
    console.log(e);
  })
}

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})
