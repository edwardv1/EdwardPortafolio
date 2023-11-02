import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import arrayCardsTech from "./techsData";

import CardTech from "../cardTech/CardTech";

function AnimatedCardTech({ card, index }) {
    const [ref, inView] = useInView({
      triggerOnce: true, 
      threshold: 0.05, 
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.05 * index }}
      >
        <CardTech
          image={card.image}
          name={card.name}
        />
      </motion.div>
    );
  }

export default function CardsTech(){

    return(
        <div class=" flex flex-wrap items-center justify-center p-6 gap-6 md:p-8 md:gap-8 lg:p-10 lg:gap-12 xl:p-10 xl:gap-14 2xl:gap-24">
            {
                arrayCardsTech.map((card, index)=>(
                    <AnimatedCardTech key={index} card={card} index={index} />
                ))
            }
        </div>
    )
}