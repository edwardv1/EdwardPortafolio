import React from "react";
import linkedInLogo from "../../assets/contact/linkedinContact.png";
import githubLogo from "../../assets/contact/githubContact.png";
import emailLogo from "../../assets/contact/gmailContact.png";
import wsLogo from "../../assets/contact/wsContact.png";
import SocialMedium from "./SocialMedium";


export default function SocialContact(){

    const socialMedia = [
        {
            id: 1,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/edward-vera-20a577188/",
            logo: linkedInLogo,
        },
        {
            id: 2,
            name: "Github",
            link: "https://github.com/edwardv1",
            logo: githubLogo,
        },
        {
            id: 3,
            name: "Email",
            link: "edwardismael1@gmail.com",
            logo: emailLogo,
        },
        {
            id: 4,
            name: "WhatsApp",
            link: "+54 2664328473",
            logo: wsLogo,
        },
    ]
 
    return(
        <div class="text-black h-1/2 w-full pb-1 sm:pb-0 flex justify-center items-center xl:h-full">
            <div class="bg-[rgba(112,112,112,0.98)] flex flex-col w-[94%] h-[90%] sm:h-[90%] sm:w-[80%] rounded-[10px] p-4 gap-2 md:h-[92%] lg:h-[92%] xl:h-[66%] md:max-w-[700px] 2xl:h-[70%]">
                {
                    socialMedia.map((contact)=>(
                        <SocialMedium contact={contact} key={contact.id}/>
                    ))
                }
            </div>
        </div>
    )
}