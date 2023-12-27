import React from "react";
import copyright from "../../assets/contact/copyright.png";
import arrowUp from "../../assets/contact/arrowup.png";
import styles from "./Footer.module.css";

export default function Footer (){
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return(
        <div id="Footer" className="bg-cover bg-center bg-slate-900 w-full flex flex-col justify-center items-center h-[80px] lg:h-[100px]">
            <button className={`${styles.containerFooter} bg-primaryColor hover:bg-opacity-80 transition duration-300 rounded-full flex justify-center items-center h-[30px] w-[30px] top-0 lg:h-[40px] lg:w-[40px]`} onClick={scrollToTop}>
                <img src={arrowUp} class="h-[14px] lg:h-[20px]" alt="" />
            </button>
            <div class="flex justify-center items-center mt-2 lg:mt-4">
                <img src={copyright} class=" h-[18px]  lg:h-[20px]" alt="Copyright" />
                <p class=" text-primaryColor ml-2 mt-[2px] text-base lg:text-xl lg:mt-0">Edward Vera</p>
            </div>
        </div>
    )
}