import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageSlider() {
  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
      >
        <div>
          <img
            src="https:////static.guitarcenter.com/static/gc/selects/2021/d-dept/gc-md-dt-fender-player-plus-09-14-21.jpg"
            alt="guitar"
          />
        </div>
        <div>
          <img
            src="https:////static.guitarcenter.com/static/gc/selects/2021/d-dept/gc-md-dt-fender-kurt-cobain-09-14-21.jpg"
            alt="guitar"
          />
        </div>
        <div>
          <img
            src="https://static.guitarcenter.com/static/gc/selects/2021/d-dept/gc-md-dt-squier-affinity-series-07-09-21.jpg"
            alt="guitar"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
