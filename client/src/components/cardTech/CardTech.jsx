import React from "react";
import styles from "./CardTech.module.css";

export default function CardTech({image, name}){
    return(
        <div>
            <label class="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:min-w-[150px] xl:min-h-[150px]" className={styles.mix}>
                <span class="flex flex-col items-center justify-center">
                    <img src={image} class="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:min-w-[80px] xl:min-h-[80px]"  alt="Tecnología" />
                    <p class="mt-1 xl:mt-2 text-sm md:text-base lg:text-lg">{name}</p>
                </span>
            </label>
        </div>
    )
}