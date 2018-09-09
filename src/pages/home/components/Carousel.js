import React from "react";
import Slider from "react-slick";
import { StyledSlideWrapper } from "../style"

const Carousel = () => {
  return (
    <StyledSlideWrapper>
      <Slider autoplay={true} dots={true} infinite={true} arrows={true}>
        <div>
          <img src="http://upload.jianshu.io/admin_banners/web_images/4442/ca32bcb9b25af3549f8fb193bc6320280b327b68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
        </div>
        <div>
          <img src="http://upload.jianshu.io/admin_banners/web_images/4453/459c5959bc66eecbd16d62140c5dbf361fd3fd20.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
        </div>
        <div>
          <img src="http://upload.jianshu.io/admin_banners/web_images/4448/4526b216a4eaac6a92b1c987ac9bb544c9f37937.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
        </div>
      </Slider>
    </StyledSlideWrapper>
  )
}

export default Carousel;
