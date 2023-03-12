import React  from "react";
import foto from "../assets/notco/notco.jpg"
import foto2 from "../assets/notco/notco2.jpg"
import foto3 from "../assets/notco/notco3.jpg"
import foto4 from "../assets/notco/notco4.jpeg"
import foto5 from "../assets/notco/notco5.jpg"
import foto6 from "../assets/notco/notco6.jpg"
import foto7 from "../assets/notco/notco7.jpg"
import ImageGallery from 'react-image-gallery';


const CarouselNotCo = () => {
    const images = [
        {
            original: foto,
            thumbnail: foto,
            loading: true,
            description: "Activacion de marca, implementacion de foodtruck en distintos puntos.",
        },
        {
            original: foto2,
            thumbnail: foto2,
            loading: true,
            description: "Activacion de marca, implementacion de foodtruck en distintos puntos.",
        },
        {
            original: foto3,
            thumbnail: foto3,
            loading: true,
            description: "Activacion de marca, implementacion de foodtruck en distintos puntos.",
        },
        {
            original: foto4,
            thumbnail: foto4,
            loading: true,
            description: "Activacion de marca, implementacion de foodtruck en distintos puntos.",
        },
        {
            original: foto5,
            thumbnail: foto5,
            loading: true,
            description: "Activacion de marca, implementacion de foodtruck en distintos puntos.",
        },
        {
            original: foto6,
            thumbnail: foto6,
            loading: true,
            description: "Activacion de marca, implementacion de foodtruck en distintos puntos.",
        },
        {
            original: foto7,
            thumbnail: foto7,
            loading: true,
            description: "Activacion de marca, implementacion de foodtruck en distintos puntos.",
        },
    ];


    return(

            <ImageGallery items={images} sizes="50px" />
            

    )
}


export default CarouselNotCo;