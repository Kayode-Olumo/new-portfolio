import React from 'react';
import { motion } from "framer-motion";


type Props = {
    // projects: Project[];
};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {projects.map((project, i) => (
                <div className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen">
                    <motion.img 
                        src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" 
                        alt="" 
                    />
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="decoration-[#F7AB0A]/50 underline">Case Study {i+1} of {projects.length}: UPS clone</span> 
                        </h4>

                        <p className="text-lg text-center md:text-left">
                            Bear claw cupcake tart oat cake gummi bears cheesecake topping croissant. Carrot cake jelly beans tiramisu chocolate candy caramels halvah. Lollipop icing halvah shortbread bear claw soufflé sugar plum carrot cake gummi bears. Powder pastry chocolate cake pastry dragée tiramisu dessert powder. Tiramisu cookie lemon drops chocolate bar apple pie fruitcake tiramisu chocolate cake tootsie roll. Liquorice cheesecake shortbread cotton candy cheesecake bonbon bear claw halvah candy.
                        </p>
                    </div>
                </div>
            ))}
        </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects;