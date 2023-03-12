import React, {  useState, Suspense } from "react";
import Container from "react-bootstrap/esm/Container";
import fotoclient1 from '../assets/logos/logonotco.png'
import fotoclient2 from '../assets/logos/malpaso.png'
import fotoclient3 from '../assets/logos/asoex.png'
import fotoclient4 from '../assets/logos/doggis.png'
import fotoclient5 from '../assets/logos/lg.png'
import fotoclient6 from '../assets/logos/juanmaestro.png'
import fotoclient7 from '../assets/logos/VIRUTEX.png'
import fotoclient8 from '../assets/logos/winia.png'
import fotoclient9 from '../assets/logos/itau.png'
import avatarwhatsapp from '../assets/logombchat.png'
import {BsTelephone} from "react-icons/bs"
import {RxInstagramLogo} from "react-icons/rx"
import {MdOutlineMail} from "react-icons/md"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import backroundvideo from '../assets/backvideonot.mp4'
import {useRef} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarouselNotCo from "./CarouselNotCo";
import CarouselDoggis from "./CarouselDoggis";
import CarouselWinia from "./CarouselWinia";
import CarouselMalpaso from "./CarouselMal Paso";
import CarouselLG from "./CarouselLG";
import CarouselAsoex from "./CarouselAsoex";
import CarouselVirutex from "./CarouselVirutex";
import { AwesomeButton } from 'react-awesome-button';
import CarouselItau from "./CarouselItau";







const Main = () => {


    //scroll to sections:
    const scrollToQuienesSomos = useRef();
    const scrollToNuestraExperiencia = useRef();
    const scrollToClientes = useRef();
    const scrollToHome = useRef();

    
    //swap components:
    
    const [isShown1, setIsShown1] = useState(true);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    const [isShown6, setIsShown6] = useState(false);
    const [isShown7, setIsShown7] = useState(false);
    const [isShown8, setIsShown8] = useState(false);


    const handleClick1 = event => {
            setIsShown1(true);
            setIsShown2(false)
            setIsShown3(false)
            setIsShown4(false)
            setIsShown5(false)
            setIsShown6(false);
            setIsShown7(false);
            setIsShown8(false);
    };

    const handleClick2 = event => {
        setIsShown2(true);
        setIsShown1(false)
        setIsShown3(false)
        setIsShown4(false)
        setIsShown5(false)
        setIsShown6(false);
        setIsShown7(false);
        setIsShown8(false);
    };
    
    const handleClick3 = event => {
        setIsShown3(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown4(false)
        setIsShown5(false)
        setIsShown6(false);
        setIsShown7(false);
        setIsShown8(false);
    };

    const handleClick4 = event => {
        setIsShown4(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown3(false)
        setIsShown5(false)
        setIsShown6(false);
        setIsShown7(false);
        setIsShown8(false);
    };

    const handleClick5 = event => {
        setIsShown5(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown3(false)
        setIsShown4(false)
        setIsShown6(false);
        setIsShown7(false);
        setIsShown8(false);
    };
    const handleClick6 = event => {
        setIsShown6(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown3(false)
        setIsShown4(false)
        setIsShown5(false);
        setIsShown7(false);
        setIsShown8(false);
    };
    const handleClick7 = event => {
        setIsShown7(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown3(false)
        setIsShown4(false)
        setIsShown5(false);
        setIsShown6(false);
        setIsShown8(false);
    };
    const handleClick8 = event => {
        setIsShown8(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown3(false)
        setIsShown4(false)
        setIsShown5(false);
        setIsShown6(false);
        setIsShown7(false);
    };


    //scroll handlers
    const handleScroll1 = () => {
            scrollToQuienesSomos.current.scrollIntoView({block: "center"}) 
        }

    const handleScroll2 = () => {
            scrollToClientes.current.scrollIntoView({block: "center"}) 
        }    
    
    const handleScroll3 = () => {
            scrollToHome.current.scrollIntoView({block: "center"}) 
        }    
    
    const handleScroll4 = () => {
            scrollToNuestraExperiencia.current.scrollIntoView({block: "center"}) 
        }    



    //image bank
    const itemData = [
        {
            img: fotoclient1,
        },
        {
            img: fotoclient2
        },
        {
            img: fotoclient3
        },
        {
            img: fotoclient4
        },
        {
            img: fotoclient5
        },
        {
            img: fotoclient6
        },
        {
            img: fotoclient7
        },
        {
            img: fotoclient8
        },
        {
            img: fotoclient9
        },
    ]



    return(
        
        <div className="mainPage">
            <Navbar  className="color-nav" fixed="top" expand="lg">
                <Container>
                    <h1 className="maintitle"><span className="maintitle2">M&B</span>GROUP </h1>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <a className="links" style={{textDecoration: 'none', color: 'black', cursor:'pointer'}} onClick={handleScroll3}> Home </a>
                            <a className="links" style={{textDecoration: 'none', color: 'white', cursor:'pointer'}} onClick={handleScroll4}> Nuestra Experiencia </a>
                            <a className="links" style={{textDecoration: 'none', color: 'black', cursor:'pointer'}} onClick={handleScroll1}> Quienes Somos </a>
                            <a className="links" style={{textDecoration: 'none', color: 'white', cursor:'pointer'}} onClick={handleScroll2}> Nuestros Clientes </a>
                        </Nav>
                        <Nav>
                            <React.Fragment>
                                <a className="links" style={{textDecoration: 'none', color: 'white', cursor:'pointer'}} onClick={() => window.location = 'mailto:horacio@mbgroup.com'}> Contacto </a>
                            </React.Fragment>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <FloatingWhatsApp phoneNumber="+56 9 6172 6975" accountName="Ventas M&B" chatMessage="Hola!, como puedo ayudarte?" 
                                statusMessage="Responde habitualmente en 30 minutos" placeholder="Escribe tu mensaje..." darkMode="true" avatar={avatarwhatsapp}    />
            <div ref={scrollToHome} className="firstBlock">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ddab71" fill-opacity="1" d="M0,128L1440,192L1440,0L0,0Z"></path>
                    </svg>
                </div>
                <video className="myVideo" autoPlay loop muted>
                    <source src={backroundvideo} type='video/mp4' />
                </video>   
                <Container>
                    <div>
                        <h1 className="titles11"> Generamos valor de marca, desarrollamos, planificamos y ejecutamos activaciones con el respaldo de un equipo profesional, creativo y logístico en todo Chile. </h1>
                    </div>
                </Container>
            </div>
                <div  ref={scrollToNuestraExperiencia} className="secondBlock">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#EDC951" fill-opacity="1" d="M0,192L30,176C60,160,120,128,180,112C240,96,300,96,360,90.7C420,85,480,75,540,101.3C600,128,660,192,720,208C780,224,840,192,900,170.7C960,149,1020,139,1080,149.3C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                        </svg>
                    </div>
                    <Container>
                            <div>
                                <h1 className="titles2">Nuestra experiencia </h1>
                                <div className="buttons">
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick1}>NotCo</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick3}>Doggis</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick4}>Malpaso</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick5}>LG</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick6}>Asoex</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick7}>Virutex</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick2}>Winia</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick8}>Itau</AwesomeButton>
                                </div>
                            </div>
                            <Suspense fallback={<div>Loading...</div>}>
                                {isShown1 && <CarouselNotCo />}
                                {isShown2 && <CarouselWinia />}
                                {isShown3 && <CarouselDoggis />}
                                {isShown4 && <CarouselMalpaso />}
                                {isShown5 && <CarouselLG />}
                                {isShown6 && <CarouselAsoex />}
                                {isShown7 && <CarouselVirutex />}
                                {isShown8 && <CarouselItau />}

                            </Suspense>
                    </Container>
                </div>
                <div ref={scrollToQuienesSomos} className="thirdBlock">
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#171515" fill-opacity="1" d="M0,256L720,128L1440,96L1440,0L720,0L0,0Z"></path>
                        </svg>
                    </div>
                    <Container>
                        <h1 className="titles5">Quienes Somos</h1>
                        <div  className="titleBlock" >
                            <h1 className="titles1"> 8 años implementando ideas y estrategias para nuestros clientes, entregando experiencias únicas en la interacción con el público.  </h1>
                            <h1 className="titles1"> Generamos valor de marca, desarrollamos, planificamos y ejecutamos activaciones con el respaldo de un equipo profesional, creativo. </h1>
                            <h1 className="titles1"> Eventos corporativos, BTL, material POP, diseño, construcción de mobiliario, stands, islas y traseras en retail. </h1>
                        </div>
                    </Container>
                </div> 
                <div ref={scrollToClientes} className="fourthBlock" >
                    <div>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path  fill="#EDC951" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,160C320,149,400,107,480,112C560,117,640,171,720,165.3C800,160,880,96,960,64C1040,32,1120,32,1200,53.3C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                        </svg>
                    </div>
                    <Container >
                        <div className="titleBlock">
                            <h1 className="titles4"> Nuestros Clientes </h1>
                        </div>
                        <div className="logosblock">
                            <div className="logocol1">
                                <img className="logo1" src={fotoclient1} alt="logo"></img>
                            </div>
                            <div className="logocol2">
                                <img className="logo2" src={fotoclient2} alt="logo"></img>
                            </div>
                            <div className="logocol3">
                                <img className="logo3" src={fotoclient3} alt="logo"></img>    
                            </div>
                            <div className="logocol4">
                                <img className="logo4" src={fotoclient4} alt="logo"></img>
                            </div>
                        </div>
                        <div className="logosblock">
                            <div className="logocol5">
                                <img className="logo5" src={fotoclient5} alt="logo"></img>
                            </div>
                            <div className="logocol6">
                                <img className="logo6" src={fotoclient6} alt="logo"></img>
                            </div>
                            <div className="logocol7">
                                <img className="logo7" src={fotoclient7} alt="logo"></img>
                            </div>
                            <div className="logocol8">
                                <img className="logo8" src={fotoclient8} alt="logo"></img>
                            </div>
                        </div>
                        <div className="logosblock">
                            <div className="logocol9">
                                <img className="logo9" src={fotoclient9} alt="logo"></img>
                            </div>
                        </div>
                    </Container>
                </div>      
                <div  className="fifthBlock">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ddab71" fill-opacity="1" d="M0,0L120,42.7C240,85,480,171,720,186.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                        </svg>
                        <Container>
                            <div className="botompage">
                                <h2 className="telephonetxt">Contacto:</h2>
                                <h3 className="telephonetxt"><BsTelephone/>+56 9 6172 6975</h3>
                                <h3 className="telephonetxt"><RxInstagramLogo/>@myb.group</h3>
                                <h3 className="telephonetxt"><MdOutlineMail/>horacio@groupmyb.cl</h3>
                            </div>
                        </Container>
                    </div>
                </div> 
            </div>         
    )
}


export default Main;