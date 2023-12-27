import React from "react";
import SocialMedium from "./SocialMedium";
import socialMedia from "./socialMedia";


export default function SocialContact(){

    return(
        <div class="text-black h-1/2 w-full pb-1 sm:pb-0 flex justify-center items-center xl:h-full">
            <div class="bg-[rgba(197,197,197,0.96)] flex flex-col w-[94%] h-[90%] sm:h-[90%] sm:w-[80%] rounded-[10px] p-4 gap-2 md:h-[92%] lg:h-[92%] xl:h-[66%] md:max-w-[700px] 2xl:h-[70%]">
                {
                    socialMedia.map((contact)=>(
                        <SocialMedium contact={contact} key={contact.id}/>
                    ))
                }
            </div>
        </div>
    )
}