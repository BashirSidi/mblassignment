import React from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer 
      id='footer'
      className='w-full pb-10 mb-[100px] md:mb-5'
    >
      
      
      <div className='flex flex-col items-center'>
      <h1 className='heading lg:max-w-[45vw] text-[#43ce79]'>
        You Can {' '}<span className='text-[#fac500]'>Reach Out</span>{' '}
        <span className='text-[#3db4e5]'>To Me</span>
      </h1>
      <p className='text-gray-400 md:mt-10 my-5 text-center'>
        I will be always available to discuss more with you.
      </p>
      <a href="mailto:bashirsalisusidi@gmail.com">
      <ShimmerButton 
        title='Get in touch'
        icon={<FaLocationArrow />}
        position='right'
      />
      </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Bashir Sidi</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((data) => (
            <div 
              key={data.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center
              backdrop-filter backdrop-blur-lg saturate-180 bg-black-200 bg-opacity-75
              rounded-lg'
            >
              <img 
                src={data.img} 
                alt={data.id + ''} 
                height={20}
                width={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer