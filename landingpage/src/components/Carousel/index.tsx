import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styled from "./styled";
import { Arrow } from "../../icons";

type PropsArrow = {
  right?: boolean;
  className?: string;
  onClick?: () => void;
};

type PropsCarousel = {
  children: React.ReactNode;
};

const ArrowNav = ({ right, ...props }: PropsArrow) => {
  return (
    <Styled.ArrowWrapper className={props.className} onClick={props.onClick}>
      <Arrow right={right} />
    </Styled.ArrowWrapper>
  );
};

const Carousel = ({ children, ...props }: PropsCarousel) => {
  const settings = {
    autoplay: false,
    centerPadding: "20px",
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...props,
    nextArrow: <ArrowNav right />,
    prevArrow: <ArrowNav />,
  };
  return (
    <Styled.Carousel>
      <Slider {...settings}>{children}</Slider>
    </Styled.Carousel>
  );
};

export default Carousel;
