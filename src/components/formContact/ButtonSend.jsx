import React from "react";
import styles from "./ButtonSend.module.css";

export default function ButtonSend(props){
    
    return(
        <div>
            <button class={`${props.disabled ? "cursor-not-allowed disabled:opacity-50" : ""}`} disabled={props.disabled}>
                <div className={styles.button}>
                <div className={styles.svgWrapper1}>
                    <div className={styles.svgWrapper}>
                    <svg class=" h-[16px] w-[16px] md:h-[20px] md:w-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                    </svg>
                    </div>
                </div>
                <span class=" text-sm md:text-lg">Enviar</span>

                </div>
            </button>
        </div>
    )
}