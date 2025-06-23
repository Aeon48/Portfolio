import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
       <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
       className='my-20 text-center text-4xl'>Technologies</motion.h2>

       <div className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate= "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(3)}
             initial='initial'
             animate= "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAdobephotoshop className='text-7xl text-sky-950'/>
            </motion.div>

            <motion.div
             variants={iconVariants(5)}
             initial='initial'
             animate= "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAdobeillustrator className='text-7xl text-red-900' />
            </motion.div>

            <motion.div 
               variants={iconVariants(6)}
               initial='initial'
               animate= "animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaFigma className='text-7xl'/>
            </motion.div>

       </div>
    </div>
  )
}

export default Technologies