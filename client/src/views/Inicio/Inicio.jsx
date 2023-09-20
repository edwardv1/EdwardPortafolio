import React from "react";
import background from "../../assets/backgrounds/inicioBg.jpg";
import styles from "./Inicio.css"

export default function Inicio (){
 //height: `calc(100vh + 30px)`
    return(
        <div id="Inicio" className="bg-cover bg-center " style={{ backgroundImage: `url(${background})`,
        height: "100vh", width: "99vw", }}>
            <div class="text-center flex flex-col justify-center h-screen gap-20">
                <b class=" text-white text-4xl ml-20 md:text-5xl lg:text-6xl ">EDWARD VERA</b>
                <div class=" pl-[10px] sm:pl-0">
                    <div class="content pb-[200px] w-1/2 mx-auto min-w-[430px] md:min-w-[515px] lg:min-w-[800px] max-w-[800px]">
                        <div class="content__container">
                        <p class="content__container__text text-lg sm:text-xl md:text-2xl lg:text-4xl">
                            Desarrollador Web
                        </p>
                        <ul class="content__container__list pl-0 w-[210px] sm:w-[220px] md:w-[60%] ml-[160px] sm:ml-[180px] md:ml-[200px] md:pt-[4px] lg:w-[430px] lg:ml-[330px] lg:pt-[0px]">
                            <li class="content__container__list__item text-lg sm:text-xl md:text-2xl lg:text-4xl">Full Stack</li>
                            <li class="content__container__list__item text-lg sm:text-xl md:text-2xl md:ml-4 md:pt-[2px] lg:text-4xl lg:ml-0">| JavaScript, TypeScript</li>
                            <li class="content__container__list__item text-lg sm:text-xl md:text-2xl md:ml-4 lg:text-4xl lg:ml-0">| React.js, Node.js</li>
                            <li class="content__container__list__item text-lg sm:text-xl md:text-2xl md:ml-4 lg:text-4xl lg:pb-[1.5px] lg:ml-0">| Sequelize, PostgreSQL</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}