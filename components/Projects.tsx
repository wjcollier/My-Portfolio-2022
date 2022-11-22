/* eslint-disable react/jsx-key */
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel"
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
	projects: Project[]
}

function Projects({ projects }: Props) {
	const dateSortProjects = (project1: Project, project2: Project) => {
		const d1 = new Date(project1._updatedAt)
		const d2 = new Date(project2._updatedAt)
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
			initial={{
				opacity: 0,
			}}
			transition={{
				duration: 1.5,
			}}
			whileInView={{
				opacity: 1,
			}}
			className=' h-screen  relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
				Projects
			</h3>

			<div className='relative w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x scrollbar-thin  snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-[#FF00E4]/80 z-20 mt-20'>
				{projects?.sort(dateSortProjects).map((project, i) => (
					<div
						key={project._id}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-10 md:p-20 mt-20'>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
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
							src={urlFor(project?.image).url()}
							alt='project image'
							width={350}
							height={250}
							key={i}
						/>

						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<p className='text-4xl font-semibold text-center mt-5'>
								<a
									href={project?.linkToBuild}
									target='POST'
									className='text-3xl flex justify-center items-center  font-normal text-center '>
									<span className='mb-5  hover:text-[#852999]'>
										{project?.title}
									</span>
								</a>
								<a
									href={project?.linkToRepo}
									target='POST'
									className='flex justify-center items-center '>
									<Image
										src='/github.svg'
										className='object-cover rounded-2xl cursor-pointer bg-purple-700 hover:bg-orange-500'
										width={40}
										height={40}
										alt='github'
									/>
								</a>
							</p>

							<div className='flex space-x-10 items-center justify-center'>
								{project?.technologies.map((technology) => (
									// eslint-disable-next-line @next/next/no-img-element
									<img
										key={technology._id}
										src={urlFor(technology.image).url()}
										className='w-10 h-10 rounded-2xl'
										alt='technology logos'
									/>
								))}
							</div>
							<p className='text-sm  md:text-md lg:text-lg text-center md:text-left pb-20'>
								{project?.summary}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className='w-full absolute top-[30%] bg-[#FF00E4]/10 left-0 h-[500px] -skew-y-12'></div>
		</motion.div>
	)
}

export default Projects
