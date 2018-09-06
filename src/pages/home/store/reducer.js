import { fromJS } from 'immutable';
import * as actionTypes from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  writerList: [],
  articlePage: 1,
  isBackTopShow: false
});

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_DATA:
      return prevState.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        writerList: fromJS(action.data.writerList)
      })
    case actionTypes.GET_MORE_LIST:
      return prevState.merge({
        'articleList': prevState.get('articleList').concat(fromJS(action.data)),
        'articlePage': action.page
      });
    case actionTypes.SHOW_BACK_TOP:
      return prevState.set("isBackTopShow", true)
    case actionTypes.HIDE_BACK_TOP:
      return prevState.set("isBackTopShow", false)      
    default:
      return prevState;
  }
}
