import React from "react";
import linkedIn from "../../assets/contact/linkedinContact.png";


export default function SocialMedium({contact}){
    return(
        <section class="bg-[rgba(255,255,255,0.72)] rounded-md h-[25%] flex flex-row items-center gap-4 px-4">
            <section className=" w-[16%] flex justify-center">
            {
                contact.link === "edwardismael1@gmail.com" ? 
                (
                    <a href={`mailto:${contact.link}`} target="_blank">
                        <img src={contact.logo} class="max-w-[40px] w-full sm:max-w-[60px] xl:h-[70px] xl:max-w-[70px]"  alt="Email" />
                    </a>
                ) : 
                contact.link === "+542664328473" ? 
                (
                    <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(contact.link)}`} target="_blank" rel="noopener noreferrer">
                        <img src={contact.logo} class="max-w-[40px] w-full sm:max-w-[60px] xl:h-[70px] xl:max-w-[70px]" alt="Contacto" />
                    </a>
                )
                :
                (
                    <a href={contact.link} target="_blank">
                        <img src={contact.logo} class="max-w-[40px] w-full sm:max-w-[60px] xl:h-[70px] xl:max-w-[70px]" alt="Contacto" />
                    </a>
                )
            }
            </section>
            <section class="flex flex-col w-[84%]">
                <b class=" text-sky-700 text-base md:text-lg lg:text-xl xl:text-2xl">{contact.name}</b>
                {
                    contact.link === "https://www.linkedin.com/in/edward-vera-20a577188/" ?
                    (
                        <p class=" text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-xl">{contact.link}</p>
                    )
                    :
                    <p class=" text-sm md:text-md lg:text-lg xl:text-xl">{contact.link}</p>
                }
            </section>
        </section>  
    )
}