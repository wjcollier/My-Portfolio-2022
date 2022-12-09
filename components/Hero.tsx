import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import Link from "next/link"
import { PageInfo } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
		words: [
			`Hi, The Name's ${pageInfo?.name}`,
			'Coder/Master Chef.tsx',
			'< Future Rival to the Elon Musk Empire 🪐/>',
		],

		loop: true,
		delaySpeed: 200,
  })

  return (
		<div className='min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
			<BackgroundCircles />
			<Image
				className='relative object-cover rounded-full hover:animate-spin mx-auto'
				src={urlFor(pageInfo?.heroImage).url()}
				alt='cover image'
				width='200px'
				height='200px'
			/>
			<div className='z-20'>
				<h2 className='text-xs font-bold md:text-md uppercase text-gray-500 dark:text-gray-500 pb-2 tracking-[10px] md:tracking-[15px] '>
					{pageInfo?.role}
				</h2>
				<h1 className='sm:text-2xl lg:text-4xl font-semibold px-10 '>
					<span className='italic dark:text-white mr-3'>{text}</span>
					<Cursor cursorColor='#00FF15' />
				</h1>

				<div className='flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-3'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
  )
}
