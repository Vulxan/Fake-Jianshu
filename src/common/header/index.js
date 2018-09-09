import React from 'react';
import { connect } from "react-redux";
import { actionCreators }  from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { StyledHeader, StyledLogo, StyledNav, StyledNavLink, StyledNavSearch, StyledSearchInfo, StyledFuncional, StyledBtnLink, StyledSearchInfoHeader, StyledSearchInfoTitle, StyledSearchInfoSwitch, StyledSearchInfoContent, StyledSearchInfoContentItem, StyledRouterLink } from './style';

const Header = (props) => {
  const { focused, mouseIn, trending_list, page, totalPage, handleInputBlur, handleInputFocus, handleMouseEnter, handleMouseLeave, handleChangePage, loginStatus, logout } = props;
  let ref = {};
  return  (
      <StyledHeader>
        <StyledRouterLink to={process.env.PUBLIC_URL + "/"}>
          <StyledLogo src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" />
        </StyledRouterLink>
        <StyledNav>
          <StyledRouterLink to={process.env.PUBLIC_URL + "/"}>
            <StyledNavLink className="front-page">首页</StyledNavLink>
          </StyledRouterLink>
          <StyledNavLink href="#">下载APP</StyledNavLink>
          <StyledNavSearch focused={focused} handleInputFocus={() => handleInputFocus(trending_list)} handleInputBlur={handleInputBlur}>
            <StyledSearchInfo  className={focused || mouseIn ? 'show' : 'hide'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <StyledSearchInfoHeader>
                <StyledSearchInfoTitle>热门</StyledSearchInfoTitle>
                <StyledSearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, ref.spin)}}><i ref={(spin) => ref.spin = spin} className="iconfont spin">&#xe851;</i>换一批</StyledSearchInfoSwitch>
              </StyledSearchInfoHeader>
              <StyledSearchInfoContent>
                {
                  trending_list
                  .filter((item, index) => { if (index >= (page - 1) * 10 && index < page * 10) { return true; } else { return false } })
                  .map((item) => (<StyledSearchInfoContentItem key={item}>{ item }</StyledSearchInfoContentItem>))
                }
              </StyledSearchInfoContent>
            </StyledSearchInfo>
          </StyledNavSearch>
        </StyledNav>
        <StyledFuncional>
          <StyledNavLink className="light"><i className="iconfont">&#xe636;</i></StyledNavLink>
          {
            loginStatus ? <StyledRouterLink to={process.env.PUBLIC_URL + "/"}><StyledNavLink className="light" onClick={logout}>退出</StyledNavLink></StyledRouterLink> : <StyledRouterLink to={process.env.PUBLIC_URL + "login"}><StyledNavLink className="light">登录</StyledNavLink></StyledRouterLink>
          }
          <StyledRouterLink to={process.env.PUBLIC_URL + "/reg"}><StyledBtnLink className="reg">注册</StyledBtnLink></StyledRouterLink>
          <StyledRouterLink to={process.env.PUBLIC_URL + "/write"}><StyledBtnLink className="arti"><i className="iconfont">&#xe615;</i>写文章</StyledBtnLink></StyledRouterLink>
        </StyledFuncional>
      </StyledHeader>
    )
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    trending_list: state.getIn(['header', 'trending_list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      list.size === 0 && dispatch(actionCreators.getTrendingList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout () {
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
