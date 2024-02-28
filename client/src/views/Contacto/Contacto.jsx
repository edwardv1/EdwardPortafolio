import background from "../../assets/backgrounds/ContactBg.png";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import FormContact from "../../components/formContact/FormContact";
import SocialContact from "../../components/socialContact/SocialContact";


export default function Contacto(){
 
    return(
        <div id="Contacto" className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${background})`}}>
            <TitleScreen title="CONTACTO"/>
            <p className="text-white px-2 sm:px-8  mt-14 text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:pt-8 2xl:pt-0">Si te interesa mi perfil o tienes alguna pregunta puedes contactarme mediante los siguientes medios:</p>
            <div className="flex flex-col items-center justify-center h-[600px] sm:h-[680px] md:h-[720px] 2xl:h-[640px] xl:flex-row">
                <FormContact/>
                <SocialContact/>
            </div>
        </div>
    )
}