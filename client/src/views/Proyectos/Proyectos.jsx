import React from "react";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import background from "../../assets/backgrounds/blackBg.png";
import CardProyect from "../../components/cardProyect/CardProyect";
import arrayProyects from './proyectsData.js';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedCardProyect({ proyect }) {
    const [ref, inView] = useInView({
      triggerOnce: true, 
      threshold: 0.1, 
    });
  
    const fadeInAndSlide = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <motion.div
        ref={ref}
        variants={fadeInAndSlide}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1.0 }}
      >
        <CardProyect props={proyect} key={proyect.id} />
      </motion.div>
    );
  }

export default function Proyectos (){

    return(
        <div id="Proyectos" className="bg-cover bg-center 2xl:h-[1024px] w-[100vw]" style={{ backgroundImage: `url(${background})`}}>
            <TitleScreen title="PROYECTOS"/>
            <p class="text-white px-4 sm:px-8 mt-14 text-center sm:text-lg md:text-2xl xl:pt-8 xl:text-3xl 2xl:pt-0">Estos son los proyectos que he realizado ya sea de forma individual o en el los que he participado.</p>
            <div class=" flex flex-wrap items-center justify-center pt-6 mdMiddle:pt-16 gap-6 md:gap-8 lg:gap-12 2xl:pt-32 xl:gap-14 2xl:gap-16">
                {
                    arrayProyects.map((proyect, key)=>(
                        <AnimatedCardProyect proyect={proyect} key={proyect.id} />
                    ))
                }
            </div>
        </div>
    )
}