import background from "../../assets/backgrounds/inicioBg.jpg";
import styles from "./Inicio.css"

export default function Inicio (){
    return(
        <div id="Inicio" className="bg-cover bg-center h-[100vh] w-full" style={{ backgroundImage: `url(${background})`}}>
            <div className="text-center flex flex-col justify-center align-center h-screen gap-20">
                <b className=" text-white text-4xl ml-10 xs:ml-20 sm:mt-[50px] md:text-5xl lg:mt-[0px] lg:text-6xl">EDWARD VERA</b>
                <div class="animation">Desarrollador Web FullStack</div>
            </div>
        </div>
    )
}