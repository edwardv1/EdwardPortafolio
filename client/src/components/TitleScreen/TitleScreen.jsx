import React from "react";

export default function TitleScreen({title}){
 
    return(
        <div class="relative flex-9 h-[80px] 2xl:h-[130px] text-center text-white pt-14 xl:pt-24">
            <span style={{ display: 'inline-block' }}>
                <b class=" text-xl lg:text-2xl 2xl:text-4xl">{title}</b>
                <hr class="  border-2 border-solid border-sky-700 " style={{ width: 'auto' }}/>
            </span>
        </div>
    )
}