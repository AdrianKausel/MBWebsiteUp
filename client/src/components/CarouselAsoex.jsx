import React from "react";
import foto2 from "../assets/asoex/asoex2.JPEG"
import foto3 from "../assets/asoex/asoex3.JPG"
import foto4 from "../assets/asoex/asoex4.JPEG"
import foto5 from "../assets/asoex/asoex5.JPG"
import foto6 from "../assets/asoex/asoex6.JPG"
import ImageGallery from 'react-image-gallery';


const CarouselAsoex = () => {
    const images = [
        {
            original: foto2,
            thumbnail: foto2,
            loading: true,
            description: "Convenciones y Seminarios",
            thumbnailHeight: "120vh",
        },
        {
            original: foto3,
            thumbnail: foto3,
            loading: true,
            description: "Convenciones y Seminarios",
            thumbnailHeight: "120vh",
        },
        {
            original: foto4,
            thumbnail: foto4,
            loading: true,
            description: "Convenciones y Seminarios",
            thumbnailHeight: "120vh",
        },
        {
            original: foto5,
            thumbnail: foto5,
            loading: true,
            description: "Convenciones y Seminarios",
            thumbnailHeight: "120vh",
        },
        {
            original: foto6,
            thumbnail: foto6,
            loading: true,
            description: "Convenciones y Seminarios",
            thumbnailHeight: "120vh",
        },
    ];


    return(
            <ImageGallery items={images} sizes="50px" />
    )
}


export default CarouselAsoex;