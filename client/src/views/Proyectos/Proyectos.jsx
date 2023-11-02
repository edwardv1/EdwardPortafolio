import React from "react";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import background from "../../assets/backgrounds/blackBg.png";
import CardProyect from "../../components/cardProyect/CardProyect";
import pokeBg from "../../assets/backgrounds/pokeBg.jpg";
import reactIcon from "../../assets/cardProyTechs/ReactTech.png";
import reduxIcon from "../../assets/cardProyTechs/ReduxTech.png";
import jsIcon from "../../assets/cardProyTechs/JsTech.png";
import tsIcon from "../../assets/cardProyTechs/TsTech.png";
import cssIcon from "../../assets/cardProyTechs/CssTech.png";
import htmlIcon from "../../assets/cardProyTechs/HtmlTech.png";
import tailwind from "../../assets/cardProyTechs/tailwindTech.png";
import primereact from "../../assets/cardProyTechs/primereactTech.png";
import jwt from "../../assets/cardProyTechs/jwtTech.png";
import nodejsIcon from "../../assets/cardProyTechs/NodejsTech.png";
import expressIcon from "../../assets/cardProyTechs/ExpressTech.png";
import postgresqlIcon from "../../assets/cardProyTechs/PostgresqlTech.png";
import bootstrapIcon from "../../assets/cardProyTechs/BootstrapTech.png";
import cloudinaryIcon from "../../assets/cardProyTechs/cloudinaryTech.png";
import castingappBg from "../../assets/backgrounds/castingAppBg.png";
import eduplussBg from "../../assets/backgrounds/Edupluss.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedCardProyect({ proyect }) {
    const [ref, inView] = useInView({
      triggerOnce: true, 
      threshold: 0.1, 
    });
  
    const fadeInAndSlide = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <motion.div
        ref={ref}
        variants={fadeInAndSlide}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1.0 }}
      >
        <CardProyect props={proyect} key={proyect.id} />
      </motion.div>
    );
  }

export default function Proyectos (){

    const arrayProyects = [
        {
            id: 3,
            name:"Edupluss",
            imageBg: eduplussBg,
            resume: "Edupluss se centra en proporcionar servicios a empresas para la capacitación de sus empleados, proporcionando tanto modulos de capacitación como de evaluación para el empleado y distintas métricas y tablas de datos para el encargado; garantizando una experiencia de usuario agradable e intuitiva.",
            arrayTechs: [
                {
                    image: tsIcon,
                },
                {
                    image: reactIcon,
                },
                {
                    image: reduxIcon,
                },
                {
                    image: tailwind,
                },
                {
                    image: primereact,
                },
                {
                    image: jsIcon,
                },
                {
                    image: nodejsIcon,
                },
                {
                    image: jwt,
                },
                // {
                //     image: expressIcon,
                // },
                {
                    image: postgresqlIcon,
                },
            ],
            date: "10/2023",
            pageURL: null,
            githubURL: null,
        },
        {
            id: 2,
            name:"Casting App",
            imageBg: castingappBg,
            resume: "Casting App facilita la conexión entre talentos y empresas del sector audiovisual/publicitario. Para las empresas, es una herramienta para seleccionar talentos para sus proyectos. Para los talentos, es una plataforma para mostrar sus habilidades y postularse a oportunidades en la industria del entretenimiento.",
            arrayTechs: [
                {
                    image: jsIcon,
                },
                {
                    image: reactIcon,
                },
                {
                    image: reduxIcon,
                },
                {
                    image: cssIcon,
                },
                {
                    image: htmlIcon,
                },
            ],
            date: "06/2023",
            pageURL: "https://deploy-sprint-2-frontend.onrender.com/",
            githubURL: "https://github.com/Equipo-PF-10/Casting-app",
        },
        {
            id: 1,
            name:"Pokedex App",
            imageBg: pokeBg,
            resume: "El proyecto se basa en una Single Page Application la cual consume una API externa y una API Rest; la misma está diseñada de forma interactiva para que el usuario pueda: ordenar pokemones, acceder a la información de cada pokemon, buscar un pokemon por su nombre, crear pokemones personalizados y eliminarlos.",
            arrayTechs: [
                {
                    image: jsIcon,
                },
                {
                    image: reactIcon,
                },
                {
                    image: reduxIcon,
                },
                {
                    image: cssIcon,
                },
                {
                    image: htmlIcon,
                },
                {
                    image: nodejsIcon,
                },
                {
                    image: expressIcon,
                },
                {
                    image: postgresqlIcon,
                },
            ],
            date: "05/2023",
            pageURL: "https://pokemon-pi-sable.vercel.app/",
            githubURL: "https://github.com/edwardv1/PokemonPI",
        },
    ]

    return(
        <div id="Proyectos" className="bg-cover bg-center 2xl:h-[1024px] w-[100vw]" style={{ backgroundImage: `url(${background})`}}>
            <TitleScreen title="PROYECTOS"/>
            <p class="text-white px-4 sm:px-8 mt-14 text-center sm:text-lg md:text-2xl xl:pt-8 xl:text-3xl 2xl:pt-0">Estos son los proyectos que he realizado ya sea de forma individual o en el los que he participado.</p>
            <div class=" flex flex-wrap items-center justify-center pt-6 mdMiddle:pt-16 gap-6 md:gap-8 lg:gap-12 2xl:pt-32 xl:gap-14 2xl:gap-16">
                {
                    arrayProyects.map((proyect, key)=>(
                        <AnimatedCardProyect proyect={proyect} key={proyect.id} />
                    ))
                }
            </div>
        </div>
    )
}