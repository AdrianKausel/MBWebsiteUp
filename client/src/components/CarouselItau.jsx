import React from "react";
import foto from "../assets/itau/itau1.jfif"
import foto2 from "../assets/itau/itau2.jfif"
import foto3 from "../assets/itau/itau3.jfif"
import ImageGallery from 'react-image-gallery';


const CarouselItau= () => {
    const images = [
        {
            original: foto,
            thumbnail: foto,
            loading: true,
            description: "Activacion en oficinas y desarrollo de aplicacion",
        },
        {
            original: foto2,
            thumbnail: foto2,
            loading: true,
            description: "Activacion en oficinas y desarrollo de aplicacion",
        },
        {
            original: foto3,
            thumbnail: foto3,
            loading: true,
            description: "Activacion en oficinas y desarrollo de aplicacion",
            thumbnailHeight: "60vh",
        },
    ];


    return(
            <ImageGallery items={images} sizes="50px" />
    )
}


export default CarouselItau;