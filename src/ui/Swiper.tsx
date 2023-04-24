import {FC, PropsWithChildren} from "react";
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper React components
import { Swiper as S } from "swiper/react";

// import Swiper core and required modules. In this example,
// we will use Pagination and Coverflow
import SwiperCore, { Pagination } from "swiper";

// configure Swiper to use modules
SwiperCore.use([Pagination]);

type SwiperProps = PropsWithChildren<{}>
export const Swiper: FC<SwiperProps> = (props) => {
    const {
        children
    } = props;

    return (
        <S
            spaceBetween={20}
            slidesPerView={1}
            pagination
            direction='horizontal'
        >
            {
                children
            }
        </S>
    )
}