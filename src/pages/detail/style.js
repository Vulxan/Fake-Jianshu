import styled from "styled-components";

export const StyledDetailWrapper = styled.section`
  width: 620px;
  margin: 0 auto;
  padding: 30px 0;
`

export const StyledDetailHeader = styled.div`
  margin: 20px 0;
  font-size: 34px;
  line-height: 34px;
  font-weight: bold;
  color: #333;
`

export const StyledDetailAuthor = styled.div`
  margin: 20px 0 100px 0;
  display: flex;
  align-items: center;
  div.info {
    div.user {
      font-size: 16px;
      color: #333;
      margin-bottom: 10px;
    }
    div.meta {
      font-size: 12px;
      color: rgb(150, 150, 150);
    }
  }
  img.avatar {
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #EEE;
    margin-right: 15px;
  }
`

export const StyledDetailContent = styled.div`
  color: #2F2F2F;
  p {
    margin: 25px 0;
    line-height: 27px;
  }
  b {
    font-weight: bold;
  }
`
