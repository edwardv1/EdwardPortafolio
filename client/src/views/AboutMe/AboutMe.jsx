import React from "react";
import background from "../../assets/backgrounds/blackBg.png"
import Carrusel from "../../components/carrusel/Carrusel";
import Foto from "../../components/foto/Foto";
import DownloadButton from "../../components/downloadButton/DownloadButton";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import CV from "../../../public/EdwardVera.pdf";

export default function AboutMe (){
 
    return(
        <div className="bg-cover bg-center " style={{ backgroundImage: `url(${background})`,
        height:"100vh", width: "99vw"}}>
            <div class="text-center h-screen grid grid-rows-[20%,42%] sm:grid-rows-[20%,37%] md:grid-rows-[20%,15%] 2xl:grid-rows-[20%,80%] text-white ">
                <TitleScreen title={"SOBRE MÍ"}/>
                <div class="grid grid-rows-[70%,20%] sm:grid-rows-[50%,50%] text-center justify-center items-center gap-y-[210px] xl:grid-cols-[70%,30%] 2xl:grid-cols-[70%,30%] ">
                    <Carrusel/>
                    <div className=" flex flex-col justify-center items-center md:mt-[320px] md:h-[70vh] xl:mr-14 xl:mt-[50vh]  2xl:mt-[30vh]">
                        <Foto/>
                        <a href={CV} download="">
                            <DownloadButton/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        
    )
}