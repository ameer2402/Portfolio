import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                    <p>Hello! My name is Mohammed Ameerkhan, and I'm a Software Application Developer at Google with 1+ years of total experience, currently engineering next-generation solutions for 
the Real World Journeys (RWJ) Emerging Journey team. Specializes in the intersection of Search and AI, with expertise in 
full-stack development that seamlessly bridges backend data models with frontend user interfaces. Proficient across the 
Software Development Life Cycle (SDLC), delivering performance-optimized solutions to enhance user engagement.  </p>
<br />
<p>Passionate about solving complex technical challenges and enabling organizational success and I enjoy tackling complex technical problems, learning new technologies deeply, and building digital products that make a meaningful impact.</p>

                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;

