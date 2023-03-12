import React from "react";
import foto from "../assets/malpaso/malpaso1.jpeg"
import foto2 from "../assets/malpaso/malpaso2.jpeg"
import foto3 from "../assets/malpaso/malpaso3.jpeg"
import foto4 from "../assets/malpaso/malpaso4.jpeg"
import ImageGallery from 'react-image-gallery';


const CarouselMalpaso = () => {
    const images = [
        {
            original: foto,
            thumbnail: foto,
            loading: true,
            description: "Activacion de marca, implementacion de stand en distintos puntos.",
            thumbnailHeight: "120vh",
        },
        {
            original: foto2,
            thumbnail: foto2,
            loading: true,
            description: "Activacion de marca, implementacion de stand en distintos puntos.",
            thumbnailHeight: "120vh",
        },
        {
            original: foto3,
            thumbnail: foto3,
            loading: true,
            description: "Activacion de marca, implementacion de stand en distintos puntos.",
            thumbnailHeight: "120vh",
        },
        {
            original: foto4,
            thumbnail: foto4,
            loading: true,
            description: "Activacion de marca, implementacion de stand en distintos puntos.",
            thumbnailHeight: "120vh",
        },
    ];


    return(
            <ImageGallery items={images} sizes="50px" />
    )
}


export default CarouselMalpaso;