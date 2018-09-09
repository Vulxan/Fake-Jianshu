import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { StyledRouteLink, StyledReg, StyledLogo, StyledRegBox, StyledRegHeader, StyledRegInputWrapper, StyledRegBtn, StyledRegLimit, StyledRegTip, StyledRegSocial } from "./style";

const Reg = () => {
  return (
    <StyledReg>
      <Link to={process.env.PUBLIC_URL + "/"}><StyledLogo src="http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" /></Link>
      <StyledRegBox>
        <StyledRegHeader>
          <StyledRouteLink to={process.env.PUBLIC_URL + "/login"}><span className="login">登录</span></StyledRouteLink>
          <span>·</span>
          <StyledRouteLink to={process.env.PUBLIC_URL + "/reg"}><span className="reg">注册</span></StyledRouteLink>
        </StyledRegHeader>
        <StyledRegInputWrapper>
          <input type="text" className="nickname" placeholder="你的昵称"/>
          <i className="iconfont">&#xe66c;</i>
        </StyledRegInputWrapper>
        <StyledRegInputWrapper>
          <input type="text" className="phone" placeholder="手机号"/>
          <i className="iconfont">&#xe61d;</i>
        </StyledRegInputWrapper>
        <StyledRegInputWrapper>
          <input type="text" className="psw" placeholder="设置密码"/>
          <i className="iconfont">&#xe6a8;</i>
        </StyledRegInputWrapper>
        <StyledRegBtn>注册</StyledRegBtn>
        <StyledRegLimit>点击 “注册” 即表示您同意并愿意遵守简书<br /><a href="">用户协议</a> 和 <a href="">用户协议</a> 。</StyledRegLimit>
        <StyledRegTip><span className="line"></span><span className="tip">社交账号直接注册</span><span className="line"></span></StyledRegTip>
        <StyledRegSocial>
          <i className="iconfont weibo">&#xe737;</i>
          <i className="iconfont weixin">&#xe637;</i>
          <i className="iconfont qq">&#xe607;</i>
          <i className="iconfont douban">&#xe6b5;</i>
        </StyledRegSocial>
      </StyledRegBox>
    </StyledReg>
  )
}

export default connect(null, null)(Reg);
