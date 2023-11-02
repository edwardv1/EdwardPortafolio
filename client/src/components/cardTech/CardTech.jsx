import React from "react";
import styles from "./CardTech.module.css";

export default function CardTech({image, name}){
    return(
        <div>
            <label class="w-[84px] h-[84px] xs:w-[100px] xs:h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] xl:min-w-[160px] xl:min-h-[160px]" className={styles.mix}>
                <span class="flex flex-col items-center justify-center ">
                    <img src={image} class="min-w-[40px] min-h-[40px] xs:min-w-[50px] xs:min-h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:min-w-[80px] xl:min-h-[80px]"  alt="Tecnología" />
                    <p class="mt-1  text-xs xs:text-sm md:text-[19px] lg:mt-3 lg:text-[22px] xl:text-[24px]">{name}</p>
                </span>
            </label>
        </div>
    )
}