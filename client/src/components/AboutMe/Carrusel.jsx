import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import {
    Carousel,
    initTE,
} from "tw-elements";
initTE({ Carousel });
import whiteBackground from "../../assets/backgrounds/whiteSmokeBg.png";

export default function Carrusel(){
  const [currentSlide, setCurrentSlide] = useState(0);

  // Funciones para cambiar el slide actual
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 3); 
  };
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 3) % 3); 
  };
  return(
    <div
      id="carouselDarkVariant"
      className="flex relative max-w-[356px] h-[350px] xs:max-w-[400px] sm:h-[300px] sm:max-w-[460px] md:h-[420px] md:max-w-[800px] md:mt-0 lg:h-[450px] lg:max-w-[570px]  xl:max-w-[800px] 2xl:max-w-[920px] xl:h-[700px] mx-auto justify-center text-center items-center bg-inherit"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      {/* Carousel indicators */}
      <div
        className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators>
        <button
          onClick={() => setCurrentSlide(0)}
          className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
            currentSlide === 0 ? 'opacity-100 bg-primaryColor' : 'opacity-50'
          }`}
          aria-current={currentSlide === 0 ? 'true' : 'false'}
          aria-label="Slide 1"
        ></button>
        <button
          onClick={() => setCurrentSlide(1)}
          className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
            currentSlide === 1 ? 'opacity-100 bg-primaryColor' : 'opacity-50'
          }`}
          aria-current={currentSlide === 1 ? 'true' : 'false'}
          aria-label="Slide 2"
        ></button>
        <button
          onClick={() => setCurrentSlide(2)}
          className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
            currentSlide === 2 ? 'opacity-100 bg-primaryColor' : 'opacity-50'
          }`}
          aria-current={currentSlide === 2 ? 'true' : 'false'}
          aria-label="Slide 3"
        ></button>
      </div>

      {/* <!-- Carousel items --> */}
      <div
        class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* <!-- First item --> */}
        <CSSTransition
            in={currentSlide === 0}
            classNames="fade"
            unmountOnExit
          >
        <div
          className="relative float-left -mr-[100%] w-full"
          data-te-carousel-fade
          data-te-carousel-item
          data-te-carousel-active>
          <img
            src={whiteBackground}
            class="block w-full h-[350px] sm:h-[300px] md:h-[420px] lg:h-[450px]  xl:h-[700px] rounded-[20px]"
            alt="Motorbike Smoke" />
          <div class="absolute inset-x-[15%] bottom-5 py-5 sm:pb-[6px] text-black block mb-[22px] md:mb-[0px] lg:mb-[54px] xl:mb-[46px] 2xl:mb-[82px]">
            <b class="text-lg sm:text-xl md:text-2xl xl:text-3xl  text-primaryColor">Acerca de mi</b>
            <p class="pt-2 pb-5 xs:pb-0 text-[13.5px] xs:text-[15px] sm:pt-[8px] sm:text-[15px] md:pb-[86px] md:pt-[16px] md:text-xl lg:pt-4 lg:pb-5 lg:text-[22px] xl:hidden text-justify">
              En el año 2020 di mis primeros pasos en el mundo de la tecnología al iniciar la carrera de Ingeniería en Informática.  
              En mis dias como estudiante se afanciaba cada vez mas mi interés por la tecnología, y sobre todo por la programación, por lo que decidí
              participar en un bootcamp intensivo en donde aprendí las bases técnicas para ser un Desarrollador Web Fullstack.
            </p>
            <ul class=" hidden xl:block xl:text-[23px] xl:pt-[24px] 2xl:pt-[18px] text-justify">
              <li>
                En el año 2014 inicié mi primera carrera profesional, al estudiar Ingeniería en Construccón Civil; en dicha carrera me gradué como
                Técnico Superior Universitario en el año 2018. Sin embargo, en ese momento me enfrenté a una situación personal que me llevó a tomar una pausa en mi camino académico.
              </li>
              <li class=" xl:pt-4">
              En el año 2020 di mis primeros pasos en el mundo de la tecnología al iniciar la carrera de Ingeniería en Informática,
              aunque mi interés por la misma habia nacido hace muchos años atrás. 
              En mis días como estudiante se afanciaba cada vez mas mi interés por la tecnología, y sobre todo por la programación, por lo que decidí
              participar en un bootcamp intensivo en donde aprendí las bases técnicas para ser un Desarrollador Web Fullstack.
              </li>
            </ul>
          </div>
        </div>
        </CSSTransition>
        {/* <!-- Second item --> */}
        <CSSTransition
            in={currentSlide === 1}
            classNames="fade"
            unmountOnExit
          >
        <div
          className="relative float-left -mr-[100%] w-full"
          data-te-carousel-fade
          data-te-carousel-item>
          <img
            src={whiteBackground}
            class="block w-full h-[350px] sm:h-[300px] md:h-[420px] lg:h-[450px] xl:h-[700px] rounded-[20px]"
            alt="Mountaintop" />
          <div
            class="absolute inset-x-[15%] bottom-5 py-5 text-center text-black block md:mb-[0px] lg:mb-[0px] xl:mb-[72px] 2xl:mb-[125px] ">
            <b class="text-lg sm:text-xl md:text-2xl xl:text-3xl text-primaryColor">Aspectos personales</b>
            <ul class="pt-2 text-justify text-[13.5px] xs:text-[15px] sm:text-[14px] md:pb-4 md:text-xl lg:text-[22px] md:pt-4 lg:pt-4 lg:pb-1 xl:pt-[4px] xl:text-[23px]">
              <p class=" hidden xl:block xl:pb-6 xl:pt-4">De acuerdo a mi experiencia educativa, puedo destacar lo siguiente de mi:</p>
              <li class="xl:hidden">
                - Cuento con sólidas habilidades comunicativas y capacidad para trabajar en equipo aplicando SCRUM y workflow de GIT.
              </li>
              <li class=" hidden xl:block xl:pb-6">
              - Cuento con sólidas habilidades comunicativas y capacidad para trabajar en equipo
              siguiendo la metodología SCRUM junto con el workflow de GIT.
              </li>
              <li class="xl:hidden">
                - Puedo alternar entre liderar y seguir instrucciones en un grupo, adaptándome según la situación lo requiera.
              </li>
              <li class=" hidden xl:block">
                - Además, la capacidad de liderazgo que he desarrollado a lo largo de mi trayectoria de estudio no descarta mi disposición 
                para ser un seguidor comprometido y efectivo. Puedo alternar entre liderar y seguir instrucciones en un grupo, adaptándome 
                según la situación lo requiera.
              </li>
              <li class=" pb-5 xs:pb-0 xl:pt-6">
                - Me considero una persona que apuesta por la autosuperación, teniendo esto en cuenta para contribuir de manera positiva con el cumplimiento de objetivos.
              </li>
            </ul>
          </div>
        </div>
        </CSSTransition>
        {/* <!-- Third item --> */}
        <CSSTransition
            in={currentSlide === 2}
            classNames="fade"
            unmountOnExit
          >
        <div
          className="relative float-left -mr-[100%] w-full"
          data-te-carousel-fade
          data-te-carousel-item>
          <img
            src={whiteBackground}
            class="block w-full h-[350px] sm:h-[300px] md:h-[420px] lg:h-[450px] xl:h-[700px] rounded-[20px]"
            alt="Woman Reading a Book" />
          <div
            class="absolute inset-x-[15%] bottom-5 py-5  text-black block md:mb-[12px] lg:mb-[-16px] xl:mb-[216px] 2xl:mb-[270px]">
            <b class="text-lg sm:text-xl md:text-2xl xl:text-3xl text-primaryColor">Objetivos</b>
            <ul class="pt-2 text-[13.5px] xs:text-[15px] sm:pt-2 sm:text-[15px] sm:pb-2 md:pt-4 md:text-xl lg:pt-4 lg:pb-6 lg:text-[22px] xl:text-[23px] text-justify   ">
              <li class="xl:hidden">
                Actualmente me dedico a desarrollar proyectos que me permitan avanzar con mi formación, 
                a la par de realizar cursos e informandome para seguir aprendiendo fortalecer mis tech skills.
              </li>
              <li class=" hidden xl:block xl:pb-4 xl:pt-2">
                Actualmente me dedico a desarrollar proyectos que me permitan avanzar con mi formación como desarrollador web, 
                a la par de realizar cursos, asistir a pasantias e informandome para seguir aprendiendo nuevas tecnologias de vanguardia y fortalecer mis tech skills.
              </li>
              <li class="pb-5 xs:pb-0 md:pt-6 xl:hidden">
              Estoy interesado en formar parte de un grupo de trabajo donde pueda combinar la estética
              y la funcionalidad del código para crear experiencias digitales cautivadoras y atractivas para los usuarios.
              </li>
              <li class=" hidden xl:block">
                A partir de mis intereses y conocimientos, me encantaría formar parte de un grupo de trabajo donde pueda combinar 
                la estética y la funcionalidad del código para crear experiencias digitales cautivadoras y atractivas para los usuarios.
              </li>
            </ul>
          </div>
        </div>
        </CSSTransition>
      </div>

      {/* <!-- Carousel controls - prev item--> */}
      <button
        class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-primaryColor hover:no-underline hover:opacity-90 hover:outline-none focus:text-primaryColor focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="prev"
        onClick={prevSlide}
        >
        <span class="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span>
      </button>
      {/* <!-- Carousel controls - next item--> */}
      <button
        class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-primaryColor hover:no-underline hover:opacity-90 hover:outline-none focus:text-primaryColor focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="next"
        onClick={nextSlide}>
        <span class="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span>
      </button>
    </div>
  )
}