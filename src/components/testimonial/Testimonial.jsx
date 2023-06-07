import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/Avatar1.jpeg";
import AVTR2 from "../../assets/Avatar2.jpeg";
import AVTR3 from "../../assets/Avatar3.jpeg";
import AVTR4 from "../../assets/Avatar4.jpeg";

// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: "Michelle",
    review:
      "I was so happy with the data analysis Jane conducted when I carried out my survey. No regrets.",
  },
  {
    avatar: AVTR2,
    name: "Kelly",
    review:
      "Jane knows exactly what she is doing and is good at what she does.The absolute best.",
  },
  {
    avatar: AVTR3,
    name: "Jake Ayuk",
    review:
      "I was very happy with the work that Jane did on my website. She was able to take my vision and turn it into a reality. The website is exactly what I wanted and it looks great. I would definitely recommend Jane to anyone who is looking for a web developer.",
  },
  {
    avatar: AVTR4,
    name: "Britney",
    review:
      "Harry was very easy to work with. She was always responsive to my feedback and she was always willing to make changes to the content until I was satisfied",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
