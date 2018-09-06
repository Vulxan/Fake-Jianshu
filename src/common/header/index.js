import React from 'react';
import { connect } from "react-redux";
import { actionCreators }  from "./store";
import { StyledHeader, StyledLogo, StyledNav, StyledNavLink, StyledNavSearch, StyledSearchInfo, StyledFuncional, StyledBtnLink, StyledSearchInfoHeader, StyledSearchInfoTitle, StyledSearchInfoSwitch, StyledSearchInfoContent, StyledSearchInfoContentItem, StyledRouterLink } from './style';

const Header = (props) => {
  const { focused, mouseIn, trending_list, page, totalPage, handleInputBlur, handleInputFocus, handleMouseEnter, handleMouseLeave, handleChangePage } = props;
  let ref = {};
  return  (
      <StyledHeader>
        <StyledRouterLink to="/">
          <StyledLogo src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" />
        </StyledRouterLink>
        <StyledNav>
          <StyledRouterLink to="/">
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
          <StyledNavLink className="light" href="#"><i className="iconfont">&#xe636;</i></StyledNavLink>
          <StyledNavLink className="light" href="#">登录</StyledNavLink>
          <StyledBtnLink className="reg" href="#">注册</StyledBtnLink>
          <StyledBtnLink className="arti" href="#"><i className="iconfont">&#xe615;</i>写文章</StyledBtnLink>          
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
    mouseIn: state.getIn(['header', 'mouseIn'])
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
