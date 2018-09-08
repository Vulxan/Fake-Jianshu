import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { StyledRouteLink, StyledLogin, StyledLogo, StyledLoginBox, StyledLoginHeader, StyledLoginInputWrapper, StyledLoginFunc, StyledLoginBtn, StyledLoginTip, StyledLoginSocial } from "./style";

const Login = () => {
  return (
    <StyledLogin>
      <Link to="/"><StyledLogo src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" /></Link>
      <StyledLoginBox>
        <StyledLoginHeader>
          <StyledRouteLink to="/login"><span className="login">登录</span></StyledRouteLink>
          <span>·</span>
          <StyledRouteLink to="/reg"><span className="reg">注册</span></StyledRouteLink>
        </StyledLoginHeader>
        <StyledLoginInputWrapper>
          <input type="text" className="act" placeholder="手机号或邮箱"/>
          <i className="iconfont">&#xe66c;</i>
        </StyledLoginInputWrapper>
        <StyledLoginInputWrapper>
          <input type="text" className="psw" placeholder="密码"/>
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
        <StyledLoginBtn>登录</StyledLoginBtn>
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

export default connect(null, null)(Login);
