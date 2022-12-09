import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType  } from '../typings'

type Props = {
	skills: SkillType[]
}

export default function Skills({skills}: Props) {
  
  const [selectedSkill, setSelectedSkill] = useState("");
  const sortSkills = (skill1: SkillType, skill2: SkillType) => {
    if (skill1.progress < skill2.progress) return 1;
    if (skill1.progress > skill2.progress) return -1;
    return 0;
  };
  return (
		<div className='flex relative flex-col text-center md:text-left  max-w-[2000px] xl:px-10 sm:h-screen py-20 space-y-10 justify-start lg:justify-evenly lg:h-full  mx-auto items-center my-16 '>
			<h3 className=' absolute top-14 uppercase  text-gray-500 text-2xl  z-40 md:tracking-[20px] tracking-[10px] text-gray_600 '>
				Tech Skills
			</h3>
			<div className='grid grid-cols-3 mt-14  md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-4 lg:gap-x-10 lg:gap-y-10 min-h-full lg:pt-8'>
				{skills?.sort(sortSkills).map((skill, ind, thisArr) => (
					<Skill
						setSelectedSkill={setSelectedSkill}
						directionTop={ind % 2 === 0}
						key={skill._id}
						skill={skill}
					/>
				))}
			</div>
			<motion.div
				key={selectedSkill}
				initial={{ x: 30, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='h-5 flex flex-col gap-3 text-center '>
				{
					<p className='text-xl md:text-3xl italic  text-gray-200 font-bold lg:'>
						{selectedSkill}
					</p>
				}
			</motion.div>
		</div>
  )
};