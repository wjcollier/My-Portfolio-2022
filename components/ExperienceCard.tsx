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
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[650px] xl:w-[900px] snap-center bg-[#292929] p-10 sm:hover:opacity-100 sm:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
				className='w-20 h-20 sm:w-40 sm:h-40 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center '
				src={urlFor(experience?.schoolImage).url()}
				alt='school img'
			/>

			<div className='px-3 sm:px-0 md:px-10 pt-2 '>
				<h4 className=' text-xl sm:text-2xl xl-text-3l font-light'>
					{experience?.course}
				</h4>

				<p className='font-bold text-sm md:text-md xl:text-xl mt-1 pb-2'>
					{experience?.company}
				</p>
				<div className='flex space-x-4 my-3 sm:pb-5'>
					{experience.technologies.map((technology) => (
						<Image
							key={technology._id}
							src={urlFor(technology.image).url()}
							className='rounded-full'
							width='30px'
							height='30px'
							alt='technology'
						/>
					))}
				</div>
				<p className='text-sm sm:text-md uppercase py-2 sm:pb-10 text-gray-300'>
					{new Date(experience.dateStarted).toDateString()} -{' '}
					{new Date(experience.dateEnded).toDateString()}
				</p>
				<p className='text-xs sm:text-sm md:text-lg text-left pb-10'>
					{experience?.courseExplanation}
				</p>
			</div>
		</article>
  )
}
