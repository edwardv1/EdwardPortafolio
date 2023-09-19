import React from "react";
import style from "./Foto.css";
import developer from "../../assets/owner.png";

export default function Foto (){
 
    return(
        <div class="conic w-[320px] h-[320px] flex items-center justify-center xl:h-[400px] xl:w-[400px]  ">
            <img src={developer} alt="Developer"  className="m-auto h-[280px] xl:h-[360px]" />
        </div>
    )
}
