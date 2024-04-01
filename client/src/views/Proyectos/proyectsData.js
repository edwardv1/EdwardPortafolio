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
        date: "08/2023",
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
        date: "07/2023",
        pageURL: "https://pokemon-pi-sable.vercel.app/",
        githubURL: "https://github.com/edwardv1/PokemonPI",
    },
]

export default arrayProyects;