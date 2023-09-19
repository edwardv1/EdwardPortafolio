import React from "react";
import styles from "./ImageCardProyect.css";

export default function ImageCardProyect(props){
 
    return(
        <div class="card-container w-[380px] h-[210px]  sm:w-[420px] sm:h-[210px] mdMiddle:h-[240px] xl:w-[500px] xl:h-[250px]">
            <div class="card">
                <div class="img-content">
                    <img src={props.imageBg} class="w-full h-full" alt="" />
                </div>
                <div class="content">
                    <b class="heading text-black text-base sm:text-lg xl:text-xl">{props.name}</b>
                    <b class="text-justify text-black text-[14.8px] sm:text-base xl:text-lg">
                        {props.resume}
                    </b>
                </div>
            </div>
        </div>
    )
}