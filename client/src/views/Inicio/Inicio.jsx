import React from "react";
import background from "../../assets/backgrounds/inicioBg.jpg";
import styles from "./Inicio.css"

export default function Inicio (){
 //height: `calc(100vh + 30px)`
    return(
        <div id="Inicio" className="bg-cover bg-center h-[100vh] w-[100vw] " style={{ backgroundImage: `url(${background})`}}>
            <div class="text-center flex flex-col justify-center h-screen gap-20">
                <b class=" text-white text-4xl ml-20 sm:mt-[200px] md:text-5xl lg:mt-[100px] lg:text-6xl 2xl:mt-0 ">EDWARD VERA</b>
                <div class="content pb-[200px] w-1/2 mx-auto min-w-[375px] xs:min-w-[412px] sm:min-w-[525px] lg:min-w-[774px] max-w-[800px]">
                    <div class="content__container xs:ml-4 sm:ml-0">
                    <p class="content__container__text ml-[35px] xs:ml-[10px] mt-[5px] xs:pl-2 text-sm xs:mt-[2px] xs:text-base sm:ml-[20px] md:mt-0 sm:text-xl md:pl-0 md:text-2xl lg:text-4xl">
                        Desarrollador Web
                    </p>
                    <ul class="content__container__list pl-0 mt-[5px] xs:w-[210px] xs:mt-[2px] xs:ml-[159px] sm:mt-0 sm:w-[220px] md:w-[60%] ml-[163px] sm:ml-[220px] md:pt-[4px] lg:w-[430px] lg:ml-[340px] lg:pt-[0px]">
                        <li class="content__container__list__item text-sm h-[30px] xs:text-base sm:h-[34px] sm:mt-[2px] sm:text-xl md:text-2xl md:mt-0 lg:h-[44px] lg:text-4xl">Full Stack</li>
                        <li class="content__container__list__item text-sm h-[30px] xs:text-base sm:h-[34px] sm:text-xl md:text-2xl md:ml-4 md:pt-[0px] lg:h-[44px] lg:text-4xl lg:ml-0">| JavaScript, TypeScript</li>
                        <li class="content__container__list__item text-sm h-[30px] xs:text-base sm:h-[34px] sm:text-xl md:text-2xl md:ml-4 md:pt-[3px] lg:h-[44px] lg:text-4xl lg:ml-0">| React.js, Node.js</li>
                        <li class="content__container__list__item text-sm h-[30px] xs:text-base sm:h-[34px] sm:text-xl md:text-2xl md:ml-4 md:mt-[3px] lg:h-[44px] lg:text-4xl lg:pb-[1.5px] lg:ml-0">| Sequelize, PostgreSQL</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}