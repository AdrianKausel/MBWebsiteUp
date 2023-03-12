import React, { useEffect, useState } from "react";
import foto from "../assets/doggis/doggis1.jpeg";
import foto2 from "../assets/doggis/doggis2.jpeg";
import foto3 from "../assets/doggis/doggis3.jpeg";
import foto4 from "../assets/doggis/doggis4.jpeg";

import ImageGallery from 'react-image-gallery';


const CarouselDoggis = () => {
    const images = [
        {
            original: foto,
            thumbnail: foto,
            loading: true,
            description: "Activacion marca",
            thumbnailHeight: "120vh",
        },
        {
            original: foto2,
            thumbnail: foto2,
            loading: true,
            description: "Activacion marca",
        },
        {
            original: foto3,
            thumbnail: foto3,
            loading: true,
            description: "Activacion marca",
        },
        {
            original: foto4,
            thumbnail: foto4,
            loading: true,
            description: "Activacion marca",
        },

    ];


    return(
            <ImageGallery items={images} sizes="50px" />
    )
}


export default CarouselDoggis;