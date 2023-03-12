import React from "react";
import foto from "../assets/winia/winia1.jpg"
import foto2 from "../assets/winia/winia2.jpg"
import foto3 from "../assets/winia/winia3.jpg"
import ImageGallery from 'react-image-gallery';


const CarouselWinia = () => {
    const images = [
        {
            original: foto,
            thumbnail: foto,
            loading: true,
            description: "Diseno 3D de mobiliario e implementacion en retail",
        },
        {
            original: foto2,
            thumbnail: foto2,
            loading: true,
            description: "Diseno 3D de mobiliario e implementacion en retail",
        },
        {
            original: foto3,
            thumbnail: foto3,
            loading: true,
            description: "Diseno 3D de mobiliario e implementacion en retail",
            thumbnailHeight: "60vh",
        },
    ];


    return(
            <ImageGallery items={images} sizes="50px" />
    )
}


export default CarouselWinia;