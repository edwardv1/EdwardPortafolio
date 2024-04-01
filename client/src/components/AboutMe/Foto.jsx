import React from "react";
import style from "./Foto.css";
import developer from "../../assets/owner.png";

export default function Foto (){
 
    return(
        <div class="conic  w-[260px] h-[270px] xs:w-[270px]  sm:h-[320px] sm:w-[280px] flex items-center justify-center xl:h-[400px] xl:w-[400px]  ">
            <img src={developer} alt="Developer"  className=" m-auto h-[232px] sm:h-[280px] xl:h-[360px]" />
        </div>
    )
}
