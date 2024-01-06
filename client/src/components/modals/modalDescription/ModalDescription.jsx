import React from 'react'
import styles from "./ModalDescription.module.css"

export const ModalDescription = ({ name, description, visible, onClose }) => {
  return (
    <div className={` fixed top-20 left-2 transition-opacity duration-300 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} max-w-[400px] px-2 pb-2 bg-slate-50  bg-opacity-95 rounded-md z-10 mr-2 sm:mr-0`}>
      <section className=' flex flex-col justify-center p-4'>
        <article className=' flex justify-between'>
          <b className='text-sm xs:text-base md:text-[22px] py-1 text-primaryColor'>{name}</b>
          <button 
            className={`${styles.buttonCloseModal} w-[22px] h-[22px] text-xs xs:text-sm md:text-[19px] md:pt-[2px] lg:pt-0 lg:text-[20px] xl:text-[20px] bg-primaryColor hover:bg-transparent border-2 border-transparent hover:border-primaryColor  text-white hover:text-primaryColor transition-all duration-300 ease-in-out" rounded-full md:w-[26px] md:h-[26px]  `} onClick={onClose}>
            <b>X</b>
          </button>
        </article>
        <p className=" mt-2 text-justify text-xs xs:text-sm md:text-[19px] lg:text-[20px]">{description}</p> 
      </section>
    </div>
  )
}
