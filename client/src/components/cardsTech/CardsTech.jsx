import React from "react";
import Js from "../../assets/techs/Js.png";
import Ts from "../../assets/techs/Ts.png";
import react from "../../assets/techs/React.png";
import Redux from "../../assets/techs/Redux.png";
import Css from "../../assets/techs/Css.png";
import Html from "../../assets/techs/Html.png";
// import Bootstrap from "../../assets/techs/Bootstrap.png";
import Primereact from "../../assets/techs/Primereact.png";
import Tailwind from "../../assets/techs/Tailwind.png";
import Nodejs from "../../assets/techs/Nodejs.png";
import Express from "../../assets/techs/Express.png";
import JWT from "../../assets/techs/JWT.png";
import Sequelize from "../../assets/techs/Sequelize.png";
import Postgresql from "../../assets/techs/Postgresql.png";
import Git from "../../assets/techs/Git.png";
import Github from "../../assets/techs/Github.png";
import Postman from "../../assets/techs/Postman.png";
import Figma from "../../assets/techs/Figma.png";
import Vscode from "../../assets/techs/Vscode.png";

import CardTech from "../cardTech/CardTech";

export default function CardsTech(){

    const arrayCardsTech = [
        {
            image: Js,
            name: "JavaScript",
        },
        {
            image: Ts,
            name: "TypeScript",
        },
        {
            image: react,
            name: "React",
        },
        {
            image: Redux,
            name: "Redux",
        },
        {
            image: Css,
            name: "CSS",
        },
        {
            image: Html,
            name: "HTML",
        },
        {
            image: Tailwind,
            name: "Tailwind CSS",
        },
        {
            image: Primereact,
            name: "PrimeReact",
        },
        // {
        //     image: Bootstrap,
        //     name: "Bootstrap",
        // },
        {
            image: Figma,
            name: "Figma",
        },
        {
            image: Nodejs,
            name: "Node.js",
        },
        {
            image: Express,
            name: "Express",
        },
        {
            image: JWT,
            name: "JWT",
        },
        {
            image: Sequelize,
            name: "Sequelize",
        },
        {
            image: Postgresql,
            name: "PostgreSQL",
        },
        {
            image: Git,
            name: "Git",
        },
        {
            image: Github,
            name: "Github",
        },
        {
            image: Postman,
            name: "Postman",
        },
        {
            image: Vscode,
            name: "VSCode",
        },
    ]
 
    return(
        <div class=" flex flex-wrap items-center justify-center p-6 gap-6 md:p-8 md:gap-8 lg:p-10 lg:gap-12 xl:p-10 xl:gap-14 2xl:gap-24">
            {
                arrayCardsTech.map((card)=>(
                    <CardTech
                    image={card.image}
                    name={card.name}
                    />
                ))
            }
        </div>
    )
}