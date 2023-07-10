import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Blog.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import AIIMAGE1 from "../../assets/ai-monitoring-desktop-business-man.jpg";
import AIIMAGE2 from "../../assets/robot-animal-scifi-technology.jpg";
import AIIMAGE3 from "../../assets/robot-mech-machine-technology.jpg";
import User1 from "../../assets/user-1.jpg";
import User2 from "../../assets/user-2.jpg";
import User3 from "../../assets/user-3.jpg";

import Possibility from "../Possibility/Possibility";

function Blog() {
  return (
    <div id="Testimonials">
      <h1 className="blog_text">What the say about us</h1>
      <div className="container-box">
        <div className=".small-container">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "15px",
              "--swiper-navigation-background-color": "black",
            }}
            slidesPerView={1}
            watchSlidesVisibility={true}
            spaceBetween={30}
            fadeEffect={true}
            speed={1000}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper testmonial"
          >
            <SwiperSlide>
              {" "}
              <Possibility
                texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
                name="Youtube"
                city="London, UK"
                img={User1}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Possibility
                texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
                name="Facebook"
                city="London, UK"
                img={User2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Possibility
                texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
                name="Twitter"
                city="London, UK"
                img={User3}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Possibility
            heading="The last step to becoming a complete minimalist"
            texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
            name="Miyah Miles"
            city="London, UK"
            img={User1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Possibility
            heading="The last step to becoming a complete minimalist"
            texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
            name="Miyah Miles"
            city="London, UK"
            img={User2}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Possibility
            heading="The last step to becoming a complete minimalist"
            texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
            name="Miyah Miles"
            city="London, UK"
            img={User3}
          />
        </SwiperSlide>
      </Swiper> */}
      {/* <Swiper>
        <div>
          <Possibility
            heading="The last step to becoming a complete minimalist"
            texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
            name="Miyah Miles"
            city="London, UK"
            img={User1}
          />
        </div>
        <div>
          <Possibility
            heading="The last step to becoming a complete minimalist"
            texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
            name="Miyah Miles"
            city="London, UK"
            img={User2}
          />
        </div>
        <div>
          <Possibility
            heading="The last step to becoming a complete minimalist"
            texts="Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti."
            name="Miyah Miles"
            city="London, UK"
            img={User3}
          />
        </div>
      </Swiper> */}
    </div>
  );
}

export default Blog;
