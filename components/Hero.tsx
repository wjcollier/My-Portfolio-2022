import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import Link from "next/link"
import { PageInfo } from "../typings"
// import imagePic from '../public/skullsanity.jpeg'
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
		delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
      <BackgroundCircles />
      <Image
        className='relative object-cover rounded-full hover:animate-spin'
        src={urlFor(pageInfo?.heroImage).url()}
        alt='cover image'
        width={200}
        height={200}
      />
      <div className='z-20'>
        <h2 className='text-xl uppercase text-gray-400 pb-2 tracking-[14px] '>
          {pageInfo?.role}
        </h2>
        <h1 className='text-4xl lg:text-6xl font-semibold px-10 '>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#FF00E4' />
        </h1>

        <div className='pt-5'>
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
