import React from "react";
import background from "../../assets/backgrounds/ContactBg.png";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import FormContact from "../../components/formContact/FormContact";
import SocialContact from "../../components/socialContact/SocialContact";


export default function Contacto(){
 
    return(
        <div className="bg-cover bg-center pt-24" style={{ backgroundImage: `url(${background})`,
        height: "100vh", width: "99vw"}}>
            <TitleScreen title="CONTACTO"/>
            <p class="text-white px-2 sm:px-8 mt-8 text-center text-md sm:text-lg md:text-xl xl:text-2xl xl:pt-8 2xl:pt-0">Si te interesa mi perfil o tienes alguna pregunta puedes contactarme mediante los siguientes medios:</p>
            <div class="flex flex-col items-center justify-center h-[80%] mdMiddle:h-[83%] 2xl:h-[77%] xl:flex-row">
                <FormContact/>
                <SocialContact/>
            </div>
        </div>
    )
}