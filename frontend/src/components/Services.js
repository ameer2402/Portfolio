import React from 'react';
import "../styles/Services.css"
import {IoCreateOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">Where I've worked</p>
                    <p className='heading-text'>Experience</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <FaGoogle className="services-icon google-icon" />
                        <p className='services-title'>Google — Software Application Developer <br /> Apr 2025 ·
                Present</p>
<p className='services-desc'>I work on Google Search’s AI-powered Real World Journeys (RWJ)
                team, building production systems that handle millions of user
                queries. My work focuses on improving data reliability and
                answer quality by prioritizing first-party Knowledge Graph data
                over third-party sources.
                <br />
                <br />
                I’ve built and optimized microservice-based data pipelines,
                increased first-party data coverage by <b>25%</b>, improved AI
                answer citation accuracy by <b>30%</b>, and boosted feature
                selection rates by <b>50%</b>. I also contributed UI/UX
                enhancements that improved user engagement and strengthened
                system reliability through improved testing and debugging.
                <br />
                <br />
                <b>Tech:</b> Java, TypeScript, Microservices, Graph Databases,
                React, Google Knowledge Graph</p>

                    </div>
                    <div className="services-card">
                        <MdBusinessCenter className="services-icon lti-icon" />
                        <p className='services-title'>LTIMindtree — Java Full Stack Developer (Team Lead)
                <br />
                Dec 2024 · Mar 2025 · 3 months</p>
<p className='services-desc'>As a Team Lead at LTIMindtree, I led a team of 5 developers to
                design and deliver a full-scale Pet Care application within 10
                days. I owned the system design and guided the team across the
                complete SDLC—from requirement analysis to deployment.
                <br />
                <br />
                I designed a scalable full-stack architecture using Angular,
                Spring Boot, and MySQL, implemented RESTful APIs, and ensured
                clean data persistence using JPA. I also standardized API
                contracts using Swagger and validated workflows with Postman to
                ensure consistent and reliable integrations.
                <br />
                <br />
                <b>Tech:</b> Java, Spring Boot, Angular, MySQL, REST APIs,
                Swagger, Hibernate, HTML, CSS, POSTMAN</p>

                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;

