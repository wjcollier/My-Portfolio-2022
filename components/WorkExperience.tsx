import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from "../typings"

type Props = {
  experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {

  const dateSortExperience = (
		experience1: Experience,
		experience2: Experience
  ) => {
		const d1 = new Date(experience1.dateStarted)
		const d2 = new Date(experience2.dateStarted)
		if (d1 > d2) {
			return 1
		}
		if (d1 < d2) {
			return -1
		}
		return 0
  }
  return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className=' min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full sm:px-10 pt-14 justify-evenly mx-auto items-center'>
			<h3 className=' absolute top-14 sm:top-20  uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl pt-5'>
				Training
			</h3>

			<div className='w-full flex  space-x-5 overflow-x-scroll sm:p-16 snap-x scrollbar-thin snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#FF00E4]/80 mb-12 p-4 mt-9'>
				{experiences?.sort(dateSortExperience).map((experience) => (
					<ExperienceCard
						key={experience._id}
						experience={experience}
					/>
				))}
			</div>
		</motion.div>
  )
}
