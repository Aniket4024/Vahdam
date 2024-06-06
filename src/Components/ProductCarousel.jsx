import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import ProductCard from './ProductCard';

const ProductCarousel = ({data}) => {
    return <Splide 
        aria-label="My Favorite Images"
        options={{
            rewind: true,
            width : 800,
            gap   : '7vh',
            drag:false,
            pagination:false,
            perMove:2,
            perPage:4,
            width:"100%",
            type:"loop",
            lazyLoad:true,
            autoplay:true,
            speed:500
        }}

    >
        
        {
            data?.map((e)=>{
                return <SplideSlide key={e?.id}>
                    <ProductCard {...e} />
                </SplideSlide>
            })
        }
        
    </Splide>
}

export default ProductCarousel
