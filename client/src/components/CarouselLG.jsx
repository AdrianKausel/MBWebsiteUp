import React from "react";
import foto from "../assets/lg/lg1.jpeg"
import foto2 from "../assets/lg/lg2.jpeg"
import foto3 from "../assets/lg/lg3.jpeg"
import foto4 from "../assets/lg/lg4.jpeg"
import ImageGallery from 'react-image-gallery';


const CarouselLG = () => {
    const images = [
        {
            original: foto,
            thumbnail: foto,
            loading: true,
            description: "Diseno 3D de mobiliario e implementacion en retail",
            thumbnailHeight: "120vh",
        },
        {
            original: foto2,
            thumbnail: foto2,
            loading: true,
            description: "Diseno 3D de mobiliario e implementacion en retail",
            thumbnailHeight: "120vh",
        },
        {
            original: foto3,
            thumbnail: foto3,
            loading: true,
            description: "Diseno 3D de mobiliario e implementacion en retail",
            thumbnailHeight: "120vh",
        },
        {
            original: foto4,
            thumbnail: foto4,
            loading: true,
            description: "Diseno 3D de mobiliario e implementacion en retail",
            thumbnailHeight: "120vh",
        },
    ];


    return(
            <ImageGallery items={images} sizes="50px" />
    )
}


export default CarouselLG;