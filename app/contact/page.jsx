"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {Select,SelectContent , SelectGroup , SelectItem , SelectLabel , SelectTrigger , SelectValue} from "@/components/ui/select"

import {FaPhoneAlt , FaEnvelope , FaMapMarkedAlt} from 'react-icons/fa';

const info = [
  {
    icon:<FaPhoneAlt />,
    title:"Phone",
    description: "(+91) 9560197101",
  },
  {
    icon:<FaEnvelope />,
    title:"Email",
    description: "abhinavkum4r@gmail.com",
  },
  
]
import {motion} from "framer-motion";
import sendMail from "../actions/sendMail";
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
    const {toast} = useToast();
    const formRef = useRef(null);
    const actionFunction = async (data)=>{
      const res = await sendMail(data);
      toast(res.message)
      if(res.success){
        formRef.current.reset();
      }
    }
    return (
      <motion.section
        initial={{opacity:0}}
        animate={{opacity:1 , transition:{delay:2.4 , duration:0.4 , ease:"easeIn"},}}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form ref={formRef} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" action={actionFunction}>
                <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                <p className="text-white/60">Got a project or just want to connect ? Reach out, and let&apos;s make it happen!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="firstname" required type="firstname" placeholder="Firstname" />
                  <Input name="lastname" type="lastname" placeholder="Lastname" />
                  <Input name="email" required type="email" placeholder="Email address" />
                  <Input name="phone" required type="phone" placeholder="Phone number" />
                </div>
                <Select name="subject" >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>
                        Select a subject
                      </SelectLabel>
                      <SelectItem value="Software Development">Software Development</SelectItem>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="Hiring">Hiring</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea required name="message" className="h-[200px]" placeholder="Type your message here."/>
                <Button size="md" className="max-w-40">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item,index)=>{
                  return(
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    )
  }
  
  export default Contact