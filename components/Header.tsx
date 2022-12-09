import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Social } from '../typings'
import Link from 'next/link'

type Props = {
  socials: Social[];
};

export default function Header({socials}: Props) {
  
  return (
		<header className='sticky top-0 z-50 max-w-full mx-auto'>
			<div className='px-4 lg:px-10 py-1 lg:py-2 mx-auto max-w-7xl md:px-20 flex'>
				<motion.div
					initial={{
						x: -500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className='flex items-center mr-auto max-w-6xl justify-center'>
					{socials.map((social) => (
						<SocialIcon
							target={'_blank'}
							key={social._id}
							url={social.url}
							fgColor='gray'
							bgColor='transparent'
						/>
					))}
				</motion.div>

				<Link href='#contact'>
					<motion.div
						initial={{
							x: 500,
							opacity: 0,
							scale: 0.5,
						}}
						animate={{
							x: 0,
							opacity: 1,
							scale: 1,
						}}
						transition={{
							duration: 1.5,
						}}
						className='flex items-center mr-3 lg:mr-8  text-gray-300 cursor-pointer'>
						<SocialIcon
							className='cursor-pointer'
							network='email'
							target={'_blank'}
							fgColor='gray'
							bgColor='transparent'
						/>
						<span className='uppercase hidden md:inline-flex text-sm text-gray-400'>
							Get In Touch
						</span>
					</motion.div>
				</Link>
			</div>
		</header>
  )
}