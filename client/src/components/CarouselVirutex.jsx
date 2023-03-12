import React from "react";
import foto from "../assets/virutex/virutex1.jpeg";
import foto2 from "../assets/virutex/virutex2.jpeg";
import foto3 from "../assets/virutex/virutex3.jpeg";

import ImageGallery from 'react-image-gallery';


const CarouselVirutex = () => {
    const images = [
        {
            original: foto,
            thumbnail: foto,
            loading: true,
            description: "Marketing y merchandising",
        },
        {
            original: foto2,
            thumbnail: foto2,
            loading: true,
            description: "Marketing y merchandising",
        },
        {
            original: foto3,
            thumbnail: foto3,
            loading: true,
            description: "Marketing y merchandising",
            thumbnailHeight: "80vh",
        },

    ];


    return(
            <ImageGallery items={images} sizes="50px" />
    )
}


export default CarouselVirutex;