import * as actionTypes from "./constants";
import Axios from "axios";

export const getDetailData = (id) => {
  return (dispatch) => {
    Axios.get('/api/detail.json?id=' + id)
    .then((res) => {
      const data = res.data.data;
      const action = {
        type: actionTypes.GET_DETAIL_DATA,
        data
      }
      dispatch(action);
    })
  }
}
