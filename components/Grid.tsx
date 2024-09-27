import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

type Props = {}

const Grid = (props: Props) => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(({
          id, 
          title, 
          description, 
          className, 
          img,
          imgClassName,
          titleClassName,
          spareImg,
          vid,
        }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            vid={vid}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid