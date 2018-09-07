import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { StyledDetailWrapper, StyledDetailHeader, StyledDetailContent, StyledDetailAuthor } from "./style";
import { actionCreators } from "./store";

class Detail extends PureComponent {
  render () {
    const { title, user, avatar, meta, content } = this.props;
    return (
      <StyledDetailWrapper>
        <StyledDetailHeader>{title}</StyledDetailHeader>
        <StyledDetailAuthor>
          <img src={avatar} alt="" className="avatar"/>
          <div className="info">
            <div className="user">{user}</div>
            <div className="meta">{meta}</div>
          </div>
        </StyledDetailAuthor>
        <StyledDetailContent dangerouslySetInnerHTML={{__html: content}} />
      </StyledDetailWrapper>
    )
  }

  componentDidMount () {
    this.props.getDetailData(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  user: state.getIn(['detail', 'user']),
  avatar: state.getIn(['detail', 'avatar']),
  meta: state.getIn(['detail', 'meta']),
  content: state.getIn(['detail', 'content'])
})

const mapDis = (dispatch) => ({
  getDetailData (id) {
    dispatch(actionCreators.getDetailData(id));
  }
})

export default connect(mapState, mapDis)(Detail);
