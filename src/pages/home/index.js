import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store"
import { StyledHomeWrapper, StyledHomeLeft, StyledHomeRight, StyledBackTopBtn } from "./style";
import Topic from "./components/Topic";
import Carousel from "./components/Carousel";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

class Home extends PureComponent {

  handleScrollTop () {
    window.scrollTo(0, 0);
  }

  render () {
    const { isBackTopShow } = this.props;
    return (
      <StyledHomeWrapper>
        <StyledHomeLeft>
          {/* <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4435/c1d3ca63353c8bd527f0d781605516cb5b266d02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="swiper-img"/> */}
          <Carousel></Carousel>
          <Topic></Topic>
          <List></List>
        </StyledHomeLeft>
        <StyledHomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </StyledHomeRight>
        {
          isBackTopShow ? <StyledBackTopBtn onClick={this.handleScrollTop}><i className="iconfont">&#xe613;</i></StyledBackTopBtn> : null
        }
      </StyledHomeWrapper>
    )
  }

  componentDidMount () {
    this.props.getHomeInfo();
    this.bindEvents();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeBackTopShow)
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeBackTopShow);
  }
}

const mapState = (state) => ({
  isBackTopShow: state.getIn(['home', 'isBackTopShow'])
})

const mapDis = (dispatch) => ({
  getHomeInfo () {
    dispatch(actionCreators.getHomeData());
  },
  changeBackTopShow () {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.showBackTop());
    } else {
      dispatch(actionCreators.hideBackTop());
    }
  }
})

export default connect(mapState, mapDis)(Home);
