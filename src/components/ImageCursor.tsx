import MainCard from "./MainCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/bundle";
import { Article } from "../types";

interface Props {
  data?: Article[];
}

const ImageCursor: React.FC<Props> = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data?.map((artical, ind) => (
        <SwiperSlide key={ind} className="rounded-xl overflow-hidden">
          <MainCard artical={artical} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCursor;