import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRouteLink = styled(Link)`
  text-decoration: none;
`

export const StyledLogin = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #F1F1F1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledLogo = styled.img`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
`

export const StyledLoginBox = styled.div`
  width: 400px;
  background-color: #FFF;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
`

export const StyledLoginHeader = styled.div`
  padding: 60px 0;
  text-align: center;
  span {
    color: #969696;
    margin: 0 2px;
    font-size: 18px;
    padding: 10px;
    &.login {
      font-weight: 700;
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
  }
`

export const StyledLoginInputWrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  input {
    margin: 0;
    font-size: 14px;
    border-bottom: 1px solid rgb(200, 200, 200);
    border-left: 1px solid rgb(200, 200, 200);
    border-right: 1px solid rgb(200, 200, 200);
    border-top: none;
    box-sizing: border-box;
    padding: 18px 5px 18px 38px;
    width: 100%;
    background-color: rgb(247, 247, 247);
    outline: none;
    &.act {
      border-top: 1px solid rgb(200, 200, 200);
      border-radius: 4px 4px 0 0;
    }
    &.psw {
      border-radius: 0 0 4px 4px;
    }
    &::placeholder {
      color: rgb(160, 160, 160);
    }
  }
  .iconfont {
    position: absolute;
    top: 0;
    left: 12px;
    color: rgb(160, 160, 160);
    font-size: 18px;
    line-height: 55px;
  }
`

export const StyledLoginFunc = styled.div`
  margin: 18px auto;
  width: 300px;
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: space-between;
  color: #969696;
  .rmb-btn {
    display: flex;
    align-items: center;
    flex-grow: 0;
    label {
      margin-left: 3px;
      cursor: pointer;
    }
  }
  .fgt-btn {
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
`
export const StyledLoginBtn = styled.button`
  border: none;
  width: 300px;
  cursor: pointer;
  margin: 0 auto 58px auto;
  background-color: #3194d0;
  padding: 9px 18px;
  font-size: 18px;
  color: #FFF;
  outline: none;
  display: block;
  border-radius: 25px;
`
export const StyledLoginTip = styled.div`
  display: flex;
  color: rgb(181, 181, 181);
  width: 240px;
  margin: 0 auto;
  font-size: 12px;
  align-items: center;
  justify-content: space-between;
  .line {
    height: 1px;
    background-color: rgb(181, 181, 181);
    width: 60px;
  }
`

export const StyledLoginSocial = styled.div`
  display: flex;
  width: 240px;
  margin: 30px auto;
  justify-content: space-between;
  align-items: center;
  i {
    cursor: pointer;
    font-size: 28px;
    &.weibo {
      color: #e05244
    }
    &.weixin {
      color: #00bb29;
    }
    &.qq {
      color: #498ad5;
    }
    &.douban {
      color: #00820f;
    }
  }
`
