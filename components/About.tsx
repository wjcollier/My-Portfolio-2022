/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
	pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className=' min-h-screen lg:h-fit flex relative flex-col text-center md:text-left md:flex-row max-w-full md:ml-10 justify-evenly mx-auto items-center pt-16 pb-28  sm:pb-0'>
			<h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl '>
				About
			</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{
					once: true,
				}}
				className=' -mb-20 mt-20  md:mb-0 flex-shrink-0 w-40 h-40 rounded-2xl object-cover md:rounded-2xl md:w-96 md:h-96 xl:w-[500px] xl:h-[500px] '
				src={urlFor(pageInfo?.profilePic).url()}
				alt='profile image'
			/>
			<div className='space-y-10 mt-20 sm:mt-none py-2 px-0 md:px-10'>
				<h4 className='text-3xl font-semibold md:px-5'>
					Here's a{' '}
					<span className='underline decoration-[#1DE2F0]/60'>
						little
					</span>{' '}
					background
				</h4>
				<p className='sm:text text-xs text-center sm:text-sm sm:text-left px-6   '>
					{pageInfo?.backgroundInformation}
					
				</p>
			</div>
		</motion.div>
	)
}


