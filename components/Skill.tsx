import React from "react"
import { motion } from "framer-motion"
import { Technology } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  skill: Technology
  directionLeft?: boolean
}

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className='rounded-2xl border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out  '
      />

      <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:w-30 xl:h-30 rounded-2xl z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className=' text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}

