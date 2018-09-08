import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Write = ({loginStatus}) => {
  if (!loginStatus) {
    return <Redirect to="/login" />
  }
  return (
    <h1>To be done...<Link to="/">back to homepage</Link></h1>
  )
}

const mapSta = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
})

export default connect(mapSta, null)(Write);
