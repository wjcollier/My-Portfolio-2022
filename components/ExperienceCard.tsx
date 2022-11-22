import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
// import Link from "next/link"
import { Experience } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className='w-40 h-40 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
        src={urlFor(experience?.schoolImage).url()}
        alt=''
      />

      <div className='px-0 md:px-10 '>
        <h4 className='text-3xl font-light'>{experience?.course}</h4>

        <p className='font-bold text-xl mt-1 pb-3'>{experience?.company}</p>
        <div className='flex space-x-4 my-3'>
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              className='rounded-full'
              width={40}
              height={40}
              alt='technology'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {new Date(experience.dateEnded).toDateString()}
        </p>
        <p className='text-sm text-left'>{experience?.courseExplanation}</p>
       
      </div>
    </article>
  )
}
