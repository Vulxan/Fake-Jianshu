import styled from "styled-components";
import React from "react";

export const StyledHeader = styled.header`
  height: 55px;
  border-bottom: 1px solid #F0F0F0;
  display: flex;
`;

const Logo = ({className, href, src}) => (
  <div className={className}>
    <StyledLink href={href}>
      <StyledLogoImg src={src} />
    </StyledLink>
  </div>
);

const StyledLink = styled.a`
  color: #000;
  height: 100%;
  display: block;
  text-decoration: none;
`;

const StyledLogoImg = styled.img`
  width: 100%;
  display: block;
`;

export const StyledLogo = styled(Logo)`
  flex: 0 0 100px;
`;

export const StyledNav = styled.div`
  flex: 1 0 0;
  display: flex;
  padding: 0 20px;
  align-items: center;
`;

export const StyledNavLink = styled(StyledLink)`
  color: #333;
  &.front-page {
    color: #ea6f5a;
  }
  &.light {
    color: #969696;
  }
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin: 0 5px;
  word-break: keep-all;
`

const StyledNavSearchInput = styled.input`
  color: #777;
  box-sizing: border-box;
  height: 38px;
  width: 160px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #EEE;
  padding: 0 34px 0 20px;
  font-size: 14px;
  transition: all .2s linear;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`

const NavSearch = ({className, focused, handleInputFocus, handleInputBlur, children}) => (
  <div className={className}>
    <StyledNavSearchInput onFocus={handleInputFocus} onBlur={handleInputBlur} className={focused ? 'focused' : ''}/>
    <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe64d;</i>
    {children}
  </div>
)

export const StyledNavSearch = styled(NavSearch)`
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    top: 50%;
    border-radius: 50%;
    padding: 5px;
    transform: translate(0, -50%);
    transition: all .2s linear;
    &.focused {
      background-color: #777;
      color: #FFF;
    }
  }
`

export const StyledSearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 47px;
  width: 240px;
  padding: 20px;
  padding-bottom: 0;
  background-color: #FFF;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`

export const StyledSearchInfoHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledSearchInfoTitle = styled.span`
  font-size: 14px;
  color: #969696;
`

export const StyledSearchInfoSwitch = styled.span`
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 13px;
    transform: rotate(0deg);
    transform-origin: center center;
    transition: all .2s ease-in;
  }
`

export const StyledSearchInfoContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
`

export const StyledSearchInfoContentItem = styled.a`
  font-size: 12px;
  padding: 5px;
  border: 1px solid #DDD;
  color: #787878;
  border-radius: 3px;
  display: block;
  margin-right: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
`

export const StyledFuncional = styled.div`
  flex: 0 0 360px;
  display: flex;
  align-items: center;
  font-size: 17px;
`

export const StyledBtnLink = styled(StyledLink)`
  height: auto;
  box-sizing: border-box;
  &.reg {
    color: #ea6f5a;
    background-color: #FFF;
    border: 1px solid #ea6f5a;
    margin-right: 20px;
    margin-left: 20px;
  }
  &.arti {
    color: #FFF;
    background-color: #ea6f5a;
  }
  height: 38px;
  line-height: 24px;
  border-radius: 20px;
  padding: 6px 20px;
`
