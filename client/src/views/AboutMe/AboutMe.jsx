import React from "react";
import background from "../../assets/backgrounds/blackBg.png"
import Carrusel from "../../components/AboutMe/Carrusel";
import Foto from "../../components/AboutMe/Foto";
import DownloadButton from "../../components/AboutMe/DownloadButton/DownloadButton";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import CV from "../../../public/EdwardVera.pdf";

export default function AboutMe (){
 //style={{ backgroundImage: `url(${background})`}}
    return(
        <div id="AboutMe" className="bg-cover bg-center h-[1024px] w-[100vw]" style={{ backgroundImage: `url(${background})`}} >
            <div class="text-center h-screen grid grid-rows-[20%,62%] xs:grid-rows-[20%,42%] sm:grid-rows-[22%,37%] md:grid-rows-[5%,75%]  lg:grid-rows-[10%,75%] xl:grid-rows-[10%,75%]  2xl:grid-rows-[0%,75%] ">
                <TitleScreen title={"SOBRE MÍ"}/>
                <div class=" flex flex-col text-center items-center sm:grid-cols-[70%,30%] md:flex md:flex-col md:items-center md:justify-center md:h-[1024px] lg:gap-y-[20px] xl:gap-y-[0px] xl:flex-row 2xl:grid-cols-[70%,30%] 2xl:mt-10 ">
                    <Carrusel/>
                    <div className=" flex flex-col mt-6  justify-center items-center xs:mt-[0px] 2xl:mr-40">
                        <Foto/>
                        <a href={CV} download="Edward Vera.pdf">
                            <DownloadButton/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        
    )
}