import React, { ReactNode } from 'react'

type Props = {}

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string,
  icon?: ReactNode,
  position?: string,
  handleClick?: () => void; 
  otherClasses?: string,
}) => {
  return (
    <div>
      <button 
        className={`inline-flex w-full h-12 animate-shimmer items-center justify-center rounded-full border
       border-none bg-[linear-gradient(110deg,#334AC0,45%,#667EDD,55%,#334AC0)] 
       bg-[length:200%_100%] px-7 font-medium text-white transition-colors focus:outline-none md:w-60 md:mt-10
       gap-2 ${otherClasses}`}
       onClick={handleClick}
       >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </button>
    </div>
  )
}

export default ShimmerButton