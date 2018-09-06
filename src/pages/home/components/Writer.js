import React from "react";
import { connect } from "react-redux";
import { StyledWriter, StyledWriterHeader, StyledWriterList, StyledWriterItem, StyledWriterItemLogo, StyledWriterItemDesc, StyledWriterMoreBtn } from "../style";

const Writer = ({ writerList }) => {
  return (
    <StyledWriter>
      <StyledWriterHeader>
        <span>推荐作者</span>
        <span><i className="iconfont">&#xe851;换一批</i></span>
      </StyledWriterHeader>
      <StyledWriterList>
        {
          writerList.map((item) => (
            <StyledWriterItem key={item.get("id")}>
              <StyledWriterItemLogo src={item.get("imgUrl")} />
              <StyledWriterItemDesc>
                <div className="header">
                  <span className="name">{item.get("name")}</span>
                  <span className="fan">＋关注</span>
                </div>
                <div className="info">写了{item.get("words")}字 · {item.get("likes")}喜欢</div>
              </StyledWriterItemDesc>
            </StyledWriterItem>
          ))
        }
      </StyledWriterList>
      <StyledWriterMoreBtn>查看全部&nbsp;＞</StyledWriterMoreBtn>
    </StyledWriter>
  )
}

const mapState = (state) => ({
  writerList: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer);
