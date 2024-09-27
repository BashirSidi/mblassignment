import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

type Props = {}

const Experience = (props: Props) => {
  return (
    <section id='experience'>
      <h1 className='heading text-[#fac500]'>
        <span className='text-[#43ce79]'>My</span>{' '} Work {' '}
        <span className='text-[#3db4e5]'>Experience</span>
      </h1>

      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1
      gap-10'>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius='1.75rem'
            className='flex-1 bg-gray-50 text-black border-neutral-200'
          >
            <div className='flex lg:flex-row flex-col lg:items-center
            p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img 
                  src={card.thumbnail} 
                  alt={card.title} 
                  className='lg:w-32 md:w-20 w-16'
                />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl text-gray-500 
                  md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-start text-gray-400 
                  mt-3 font-semibold'>
                    {card.desc}
                  </p>
                </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  )
}

export default Experience