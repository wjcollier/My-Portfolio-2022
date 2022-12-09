import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	name: string
	email: string
	subject: string
	message: string
}

type Props = {}

function ContactMe({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:williamjcollier4@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
	}

	return (
		<div className='min-h-screen sm:h-screen lg:h-fit flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center mt-16 '>
			<h3 className=' absolute top-10 sm:top-20  uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl pt-4'>
				Contact
			</h3>

			<div className='flex flex-col space-y-2 sm:space-y-10 mt-20 p-4 lg:p-14'>
				<h4 className='text-xl md:text-4xl font-semibold text-center '>
					Drive - Work Ethic - Anything&apos;s Possible -{' '}
					<span className='decoration-[#00FF15]/50 underline'>
						&nbsp;Let&apos;s Talk.
					</span>
				</h4>

				<div className='space-y-4 '>
					<div className='flex items-center space-x-4 justify-center'>
						<PhoneIcon className='text-[#00FF15] h-7 w-7 animate-pulse' />
						<p className='text-xl'>+6281802246688</p>
					</div>

					<div className='flex items-center space-x-2 justify-center'>
						<EnvelopeIcon className='text-[#04D9EB] h-7 w-7 animate-pulse' />
						<p className='text-xl'>williamjcollier4@gmail.com</p>
					</div>

					<div className='flex items-center space-x-4 justify-center'>
						<MapPinIcon className='text-[#FF00DB] h-7 w-7 animate-pulse' />
						<p className='text-xl'>Bali, Indonesia</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='max-w-[95vw] w-full
          flex flex-col space-y-1 2xl:space-y-2  sm:max-w-full sm:w-fit mx-auto pb-10'>
					<div className='flex space-x-2'>
						<input
							{...register('name')}
							placeholder='Name'
							className='contactInput w-full'
							type='text'
						/>
						<input
							{...register('email')}
							placeholder='Email'
							className='contactInput w-full'
							type='email'
						/>
					</div>

					<input
						{...register('subject')}
						placeholder='Subject'
						className='contactInput'
						type='text'
					/>

					<textarea
						{...register('message')}
						placeholder='Message'
						className='contactInput'
					/>
					<button
						type='submit'
						className='bg-[#9552FF] py-5 px-10 rounded-md text-black font-bold text-lg '>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe
