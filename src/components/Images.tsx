import {FC} from 'react';
import React from 'react';

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const Images:FC<ImagesProps> = (props) => {
  const {data, onClick} = props;

  const handleClickImage = (index:number) => {
    onClick(index)
  }

  return (
    <div className='flex'>
      {data.map((slide, index) => (
        <div className='w-[100px]' onClick={() => handleClickImage(index)} key={index}>
          <img className='cursor-pointer hover:opacity-90' src={slide.src} alt={slide.description}/>
        </div>
      ))}
    </div>
  )
}

export default Images
