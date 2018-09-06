import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRouterLink = styled(Link)`
  text-decoration: none;
`

export const StyledHomeWrapper = styled.section`
  width: 960px;
  margin: 0 auto;
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
`
export const StyledHomeLeft = styled.div`
  flex: 0 0 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const StyledHomeRight = styled.div`
  flex: 0 0 280px;
`

export const StyledTopic = styled.div`
  padding-top: 30px;
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  .more-topics {
    display: block;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    a {
      color: #787878;
      text-decoration: none;
    }
  }
`

export const StyledTopicItem = styled.div`
  background-color: #F7F7F7;
  color: rgb(51, 51, 51);
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #DCDCDC;
  font-size: 14px;
  margin-right: 18px;
  margin-bottom: 18px;
  img {
    display: block;
    width: 32px;
    height: 32px;
  }
  span {
    padding: 0 8px;
  }
`

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EEE;
  padding: 25px 0;
  &:first-child {
    border-top: 1px solid #EEE;
  }
`

export const StyledListItemContent = styled.div`
  display: flex;
  flex-flow: column;
  flex-basis: 478px;
`

export const StyledListItemTitle = styled.div`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 27px;
`

export const StyledListItemDesc = styled.p`
  color: rgb(153, 153, 153);
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 8px;
`

export const StyledListItemInfo = styled.p`
  span {
    display: inline-block;
    margin-right: 10px;
    color: rgb(180, 180, 180);
    font-size: 12px;
    a {
      text-decoration: none;
      color: rgb(180, 180, 180);
    }
    .iconfont {
      font-size: 12px;
    }
  }
`

export const StyledListItemImg = styled.img`
  width: 125px;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 4px;
`

export const StyledLoadMoreBtn = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #A5A5A5;
  text-align: center;
  border-radius: 20px;
  color: #FFF;
  margin: 30px 0;
  cursor: pointer;
`

export const StyledRecommendItem = styled.a`
  text-decoration: none;
  display: block;
  height: 50px;
  margin-bottom: 6px;
  &:first-child {
    margin-top: -4px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`
export const StyledBackTopBtn = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #CCC;
  bottom: 50px;
  right: 40px;
  i.iconfont {
    font-size: 30px;
    font-weight: 400;
    color: #666;
  }
`

export const StyledWriter = styled.div`
  padding: 30px 0;
`

export const StyledWriterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: rgb(150, 150, 150);
    font-size: 14px;
    i.iconfont {
      font-size: inherit;
    }
  }
`

export const StyledWriterList = styled.div`
  padding: 10px 0;
`

export const StyledWriterItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const StyledWriterItemLogo = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: 1px solid #EEE;
  box-sizing: border-box;
  display: block;
  margin-right: 10px;
`

export const StyledWriterItemDesc = styled.div`
  flex: 1 0 0;
  div.header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    span.name {
      color: rgb(51, 51, 51);
    }
    span.fan {
      color: #42c02e;
    }
  }
  div.info {
    font-size: 12px;
    margin-top: 6px;
    color: #969696
  }
`

export const StyledWriterMoreBtn = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  border: 1px solid #DCDCDC;
  background-color: #F7F7F7;
  padding: 7px 0;
  font-size: 13px;
  color: #787878;
  border-radius: 4px;
  outline: none;
`