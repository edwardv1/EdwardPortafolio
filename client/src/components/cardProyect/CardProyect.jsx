import React from "react";
import ImageCardProyect from "./ImageCardProyect.jsx";
import githubButton from "../../assets/buttons/githubButton.png";
import linkButton from "../../assets/buttons/linkButton.png";

export default function CardProyect({props}){

    return(
        <div>
            <ImageCardProyect name={props.name} imageBg={props.imageBg} resume={props.resume}/>
            <div class=" bg-none w-[380px] h-[126px] sm:w-[420px] xl:w-[500px] xl:h-[350px]">
                <div class="flex bg-gray-300 w-full h-[30px] md:h-[40px] text-center justify-center items-center">
                    <b class=" tracking-wider txt-lg mdMiddle:text-xl">{props.name}</b>
                </div>
                <div class=" bg-whitesmoke grid grid-col-[30%,70%] w-[380px] sm:w-[420px] h-[100px] xl:w-[500px] xl:h-[110px] rounded-bl-[10px] rounded-br-[10px]">
                    <div class="flex flex-wrap text-center gap-x-2 justify-center items-center pt-2 h-[30px] mdh-[60px]">
                        {
                            props.arrayTechs.map((techIcon) => (
                                <img src={techIcon.image} class="w-[30px] h-[30px] md:w-[34px] md:h-[34px] xl:w-[40px] xl:h-[40px]" alt="Tecnología" />
                            ))
                        }
                    </div>
                    <div class="flex justify-between h-[50px] pl-6 pr-6 items-center text-base xl:text-xl xl:pt-3">
                        <p>{props.date}</p>
                        <div class="flex">
                           <button class=" bg-sky-600 w-8 h-8 xl:w-10 xl:h-10 rounded-full flex items-center justify-center">
                            <a href={props.pageURL}>
                                <img src={linkButton} class="w-[24px] h-[24px] xl:w-[30px] xl:h-[30px]" alt="Enlace" />
                            </a>
                            </button> 
                            <button class=" bg-sky-600 w-8 h-8 xl:w-10 xl:h-10 rounded-full flex items-center justify-center ml-4">
                                <a href={props.githubURL}>
                                    <img src={githubButton} class="w-[24px] h-[24px] xl:w-[30px] xl:h-[30px]" alt="Github" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}