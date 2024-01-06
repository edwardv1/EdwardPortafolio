import React from "react";
import styles from "./CardTech.module.css";


export default function CardTech({image, name, description, openModalDescription, changeName}){

    return(
        <div>
            <label class="w-[84px] h-[84px] xs:w-[100px] xs:h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] xl:min-w-[160px] xl:min-h-[160px]" className={styles.mix}>
                <span 
                    class="flex flex-col items-center justify-center cursor-pointer" 
                    onClick={() => {
                        openModalDescription(description);
                        changeName(name);
                    }}>
                    <img src={image} class="min-w-[40px] min-h-[40px] xs:min-w-[50px] xs:min-h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:min-w-[80px] xl:min-h-[80px]"  alt="Tecnología" />
                    <p class={`
                        mt-1 
                        ${name ==="Testing Library" ? "text-[11px]" : "text-xs"}  
                        ${name ==="Testing Library" ? "xs:text-xs" : "xs:text-sm"} 
                        ${name ==="Testing Library" ? "md:text-[15.8px]" : "md:text-[19px]"}  
                        ${name ==="Testing Library" ? "lg:text-[20px]" : "lg:text-[22px]"}  
                        lg:mt-3  
                        ${name ==="Testing Library" ? "xl:text-[21px]" : "xl:text-[24px]"} `}>
                            {name}
                    </p>
                </span>
            </label>
        </div>
    )
}