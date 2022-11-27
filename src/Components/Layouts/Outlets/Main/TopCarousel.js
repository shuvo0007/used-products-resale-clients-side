import { Carousel } from "flowbite-react";
import React from "react";

const TopCarousel = () => {
  return (
    <div>
      <div className="custom-h">
        <Carousel slideInterval={3000}>
          <img
            className="custom-h"
            src="https://dlcdnrog.asus.com/rog/media/1622468922392.webp"
            alt="..."
          />
          <img
            className="custom-h"
            src="https://reviewed-com-res.cloudinary.com/image/fetch/s--pLupLqoY--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1591417048360/HP-Omen-X-2s-Hero2.jpg"
            alt="..."
          />
          <img
            className="custom-h"
            src="https://i.ytimg.com/vi/t7sOFoS-IRk/maxresdefault.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default TopCarousel;
