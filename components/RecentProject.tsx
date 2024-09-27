import React from 'react'
import dynamic from "next/dynamic";
const PinContainer = dynamic(
  () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);
import { projects } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'

type Props = {}

const RecentProject = (props: Props) => {
  return (
    <section className='py-20 ' id='projects'>
      <h1 className='heading text-[#fac500]'>
      <span className='text-[#3db4e5]'>A Small</span> {' '} Selection of My {' '}
        <span className='text-[#43ce79]'>Recent Projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center
      p-4 gap-x-24 gap-y-8 mt-10'
      >
        {projects.map(({id, des, title, link, iconLists,img }) => (
          <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]
          flex items-center justify-center
          sm:w-[570px] w-[80vw]">
            <PinContainer title={link} href={link}>
              <div
                className='relative flex items-center justify-center
                sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]
                mb-10'
              >
                <div className='relative w-full h-full overflow-hidden
                lg:rounded-3xl bg-[#f2f6fd]'>
                  <img src='/bg.png' alt='bg-img' />
                </div>
                <img 
                  src={img}
                  alt={title}
                  className='z-10 absolute bottom-0'
                />
              </div>

              <h1 className='text-gray-500 font-bold lg:text-2xl
              md:text-xl text-base line-clamp-1'>
                {title}
              </h1>

              <p className='text-gray-400 lg:text-xl lg:font-normal
              font-light text-sm line-clamp-2'>
                {des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={icon} className='border border-[#3a4bc3]/[0.2] rounded-full 
                    h-8 w-8 bg-gray-300 flex justify-center items-center'
                    style={{transform: `translateX(-${5 * index * 2}px)`}}
                    >
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl text-xs'>
                    Check Live Site
                  </p>
                  <FaLocationArrow className='ms-3' color='#cccccc' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentProject