import React from "react";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import background from "../../assets/backgrounds/blackBg.png";
import CardProyect from "../../components/cardProyect/CardProyect";
import pokeBg from "../../assets/backgrounds/pokeBg.jpg";
import reactIcon from "../../assets/cardProyTechs/ReactTech.png";
import reduxIcon from "../../assets/cardProyTechs/ReduxTech.png";
import jsIcon from "../../assets/cardProyTechs/JsTech.png";
import cssIcon from "../../assets/cardProyTechs/CssTech.png";
import htmlIcon from "../../assets/cardProyTechs/HtmlTech.png";
import nodejsIcon from "../../assets/cardProyTechs/NodejsTech.png";
import expressIcon from "../../assets/cardProyTechs/ExpressTech.png";
import postgresqlIcon from "../../assets/cardProyTechs/PostgresqlTech.png";
import bootstrapIcon from "../../assets/cardProyTechs/BootstrapTech.png";
import cloudinaryIcon from "../../assets/cardProyTechs/cloudinaryTech.png";
import castingappBg from "../../assets/backgrounds/castingAppBg.png";

export default function Proyectos (){

    const arrayProyects = [
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
                {
                    image: bootstrapIcon,
                },
            ],
            date: "06/2023",
            pageURL: "https://deploy-sprint-2-frontend.onrender.com/",
            githubURL: "https://github.com/Equipo-PF-10/Casting-app",
        },
    ]
 
    return(
        <div id="Proyectos" className="bg-cover bg-center " style={{ backgroundImage: `url(${background})`,
        height: "100vh", width: "99vw"}}>
            <TitleScreen title="PROYECTOS"/>
            <p class="text-white px-4 sm:px-8 mt-8 text-center sm:text-lg md:text-xl xl:text-2xl xl:pt-8 2xl:pt-0">Estos son los proyectos que he realizado ya sea de forma individual o en el los que he participado.</p>
            <div class=" flex flex-wrap items-center justify-center pt-6 mdMiddle:pt-32 gap-6 md:gap-8 lg:gap-12 xl:gap-14 2xl:gap-24">
                {
                    arrayProyects.map((proyect, key)=>(
                        <CardProyect props={proyect} key={proyect.id}/>
                    ))
                }
            </div>
        </div>
    )
}