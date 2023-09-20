import React from "react";
import background from "../../assets/backgrounds/skillsBg.png"
import CardsTech from "../../components/cardsTech/CardsTech";
import TitleScreen from "../../components/TitleScreen/TitleScreen";

export default function Skills (){
 
    return(
        <div id="Skills" className="bg-cover bg-center" style={{ backgroundImage: `url(${background})`,
        height: "100vh", width: "99vw"}}>
            <TitleScreen title={"HABILIDADES"}/>
            <p class="text-white px-4 sm:px-8 mt-8 text-center text-md sm:text-lg md:text-xl xl:text-2xl xl:pt-8 2xl:pt-0">Estos son los lenguajes, tecnologías y herramientas que utilizo.</p>
            <CardsTech/>
        </div>
    )
}