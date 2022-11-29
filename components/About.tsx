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
			className='flex relative flex-col h-screen text-center md:text-left
                       md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-10'>
			<h3 className=' absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl pt-2 '>
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
				className='-mb-20  md:mb-0 flex-shrink-0 w-40 h-40 rounded-2xl object-cover md:rounded-2xl md:w-96 md:h-96 xl:w-[500px] xl:h-[500px] '
				src={urlFor(pageInfo?.profilePic).url()}
				alt='profile image'
				width={150}
				height={150}
			/>
			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here's a{' '}
					<span className='underline decoration-[#1DE2F0]/60'>
						little
					</span>{' '}
					background
				</h4>
				<p className='text-sm text-left'>
					{pageInfo?.backgroundInformation}
				</p>
			</div>
		</motion.div>
	)
}

{
}
