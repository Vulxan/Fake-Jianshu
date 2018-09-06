import React from "react";
import { connect } from "react-redux";
import { StyledTopic, StyledTopicItem } from "../style"

const Topic = (props)  => {
  const { topicList } = props;
  return (
    <StyledTopic>
      { topicList.map((item) => (<StyledTopicItem key={item.get('id')}><img src={item.get('imgUrl')} alt="tiny-img"/><span>{item.get('title')}</span></StyledTopicItem>)) }
      <span className="more-topics"><a href="/">更多热门专题&nbsp;></a></span>
    </StyledTopic>
  )
}

const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);