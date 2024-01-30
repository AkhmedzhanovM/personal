import {useState} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {slides} from '../constants';
import {Captions, Fullscreen, Counter, Download} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css'
import Images from './Images';

const Gallery = () => {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <Images data={slides} onClick={(currentIndex) => setIndex(currentIndex)}/>

      <Lightbox 
        plugins={[Captions, Fullscreen, Counter, Download]} 
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides} 
      />
    </>
  )
}

export default Gallery
