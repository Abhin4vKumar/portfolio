"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num:'01',
    title: 'Web Development',
    description:'Crafting responsive and dynamic websites tailored to your business needs, ensuring a seamless user experience across all devices.',
    href:""
  },
  {
    num:'02',
    title: 'Desktop App Development',
    description:'Building robust and efficient desktop applications that enhance productivity and meet specific functional requirements for your business.',
    href:""
  },
  {
    num:'03',
    title: 'Android App Development',
    description:'Creating intuitive and engaging mobile apps for both Android and iOS platforms, designed to captivate users and drive growth.',
    href:""
  },
  {
    num:'04',
    title: 'iOS App Development',
    description:'Specializing in developing high-quality iOS apps that leverage the latest features of Apple’s ecosystem, ensuring optimal performance and user satisfaction.',
    href:""
  },
]

import {motion} from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1 , transition:{delay:2.4 , duration:0.4 , ease:"easeIn"},}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index)=>{
            return(
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services