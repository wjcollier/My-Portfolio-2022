/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps } from "next"
// import type { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import About from "../components/About"
import ContactMe from "../components/ContactMe"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import WorkExperience from "../components/WorkExperience"
import { server as host } from '../config'

// import { sanityClient } from "../sanity"
import { Experience, PageInfo, Project, Technology, Social } from "../typings"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchSocials } from "../utils/fetchSocials"

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Technology[]
  projects: Project[]
  socials: Social[]
}

const Home  = ({pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FF00E4]/80'>
			<Head>
				<link rel='shortcut icon' href='/skull-colors2.png' />
				<title>Billy Joe's Portfolio</title>
			</Head>

			<Header socials={socials} />

			<section id='hero' className='snap-start'>
				<Hero pageInfo={pageInfo} />
			</section>

			<section id='about' className='snap-center'>
				<About pageInfo={pageInfo} />
			</section>

			<section id='experience' className='snap-center'>
				<WorkExperience experiences={experiences} />
			</section>

			<section id='skills' className='snap-start'>
				<Skills skills={skills} />
			</section>

			<section id='projects' className='snap-start'>
				<Projects projects={projects} />
			</section>

			<section id='contact' className='snap-start'>
				<ContactMe />
			</section>

			<Link href='#hero'>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<Image
							className='h-5 w-5 rounded-full filter cursor-pointer hover:bg-orange-500'
							src='/ghostrider.jpeg'
							alt='ghostrider'
							width={40}
							height={40}
						/>
					</div>
				</footer>
			</Link>
		</div>
  )
}

export default Home

export const getStaticProps = async () => {
	const pageInfo: PageInfo = await fetchPageInfo(host)
	const experiences: Experience[] = await fetchExperiences(host)
	const skills: Technology[] = await fetchSkills(host)
	const projects: Project[] = await fetchProjects(host)
	const socials: Social[] = await fetchSocials(host)

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},
		revalidate: 10,
	}
}


