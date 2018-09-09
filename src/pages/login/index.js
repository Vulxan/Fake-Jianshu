import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionCreators }  from "./store";
import { StyledRouteLink, StyledLogin, StyledLogo, StyledLoginBox, StyledLoginHeader, StyledLoginInputWrapper, StyledLoginFunc, StyledLoginBtn, StyledLoginTip, StyledLoginSocial } from "./style";

const Login = ({login, loginStatus, act, psw, changeAct, changePsw}) => {
  if (loginStatus) {
    return <Redirect to={process.env.PUBLIC_URL + "/"} />
  }
  return (
    <StyledLogin>
      <StyledRouteLink to={process.env.PUBLIC_URL + "/"}><StyledLogo src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" /></StyledRouteLink>
      <StyledLoginBox>
        <StyledLoginHeader>
          <StyledRouteLink to={process.env.PUBLIC_URL + "/login"}><span className="login">登录</span></StyledRouteLink>
          <span>·</span>
          <StyledRouteLink to={process.env.PUBLIC_URL + "/reg"}><span className="reg">注册</span></StyledRouteLink>
        </StyledLoginHeader>
        <StyledLoginInputWrapper>
          <input type="text" className="act" placeholder="手机号或邮箱" value={act} onChange={changeAct} />
          <i className="iconfont">&#xe66c;</i>
        </StyledLoginInputWrapper>
        <StyledLoginInputWrapper>
          <input type="password" className="psw" placeholder="密码" value={psw} onChange={changePsw} />
          <i className="iconfont">&#xe6a8;</i>
        </StyledLoginInputWrapper>
        <StyledLoginFunc>
          <div className="rmb-btn">
            <input type="checkbox" name="rmb" id="rmb" />
            <label htmlFor="rmb"><span>记住我</span></label>
          </div>
          <div className="fgt-btn">
            <span>登陆遇到到问题?</span>
          </div>
        </StyledLoginFunc>
        <StyledLoginBtn onClick={() => login(act, psw)}>登录</StyledLoginBtn>
        <StyledLoginTip><span className="line"></span><span className="tip">社交账号登录</span><span className="line"></span></StyledLoginTip>
        <StyledLoginSocial>
          <i className="iconfont weibo">&#xe737;</i>
          <i className="iconfont weixin">&#xe637;</i>
          <i className="iconfont qq">&#xe607;</i>
          <i className="iconfont douban">&#xe6b5;</i>
        </StyledLoginSocial>
      </StyledLoginBox>
    </StyledLogin>
  )
}

const mapSta = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus']),
  act: state.getIn(['login', 'act']),
  psw: state.getIn(['login', 'psw'])
})

const mapDis = (dispatch) => ({
  login (act, psw) {
    if (act.includes(' ') || psw.includes(' ') || act === '' || psw === '') {
      dispatch(actionCreators.changeAct(''));
      dispatch(actionCreators.changePsw(''));
    } else {
      dispatch(actionCreators.login(act, psw));
    }
  },
  changeAct (e) {
    dispatch(actionCreators.changeAct(e.target.value));
  },
  changePsw (e) {
    dispatch(actionCreators.changePsw(e.target.value));
  }
})

export default connect(mapSta, mapDis)(Login);
