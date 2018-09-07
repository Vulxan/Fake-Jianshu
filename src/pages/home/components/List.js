import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { StyledListItem, StyledListItemContent, StyledListItemTitle, StyledListItemDesc, StyledListItemInfo, StyledListItemImg, StyledLoadMoreBtn, StyledRouterLink } from "../style"

const List = ({ list, getMoreList, page }) => {
  return (
    <div>
      {
        list.map((item, index) => (
          <StyledRouterLink key={index} to={`/detail/${item.get('id')}`}>
            <StyledListItem>
              <StyledListItemContent>
                <StyledListItemTitle to="/detail">{item.get('title')}</StyledListItemTitle>
                <StyledListItemDesc>{item.get('desc')}</StyledListItemDesc>
                <StyledListItemInfo>
                  <span className="user">{item.get('user')}</span><span className="comments"><i className="iconfont">&#xe621;</i>{item.get('comments')}</span><span className="like"><i className="iconfont">&#xe6f4;</i>{item.get('like')}</span>
                </StyledListItemInfo>
              </StyledListItemContent>
              <StyledListItemImg src={item.get('imgUrl')}></StyledListItemImg>
            </StyledListItem>
          </StyledRouterLink>
        ))
      }
      <StyledLoadMoreBtn onClick={() => {getMoreList(page)}}>更多文字</StyledLoadMoreBtn>
    </div>
  )
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapState, mapDispatch)(List);
