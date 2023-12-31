import { useState } from 'react'
import ReactPlayer from 'react-player'
import Image from '../../components/Image'
import { menu } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Modal from '../locaciones/Modal'
import Imagenes from '../locaciones/Imagenes'
import BeatLoader from 'react-spinners/BeatLoader'

const DetallesComponent = ({ data, texts, lan }) => {
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${data.id}`)
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)

  const handelNext = () => {
    if (currentIndex === dataImages.length - 1) {
      setCurrentImage(dataImages[0].image)
      setcurrentIndex(0)
    } else {
      setCurrentImage(dataImages[currentIndex + 1].image)
      setcurrentIndex(currentIndex + 1)
    }
  }
  const handelPrev = () => {
    if (currentIndex === 0) {
      setCurrentImage(dataImages[dataImages.length - 1].image)
      setcurrentIndex(dataImages.length - 1)
    } else {
      setCurrentImage(dataImages[currentIndex - 1].image)
      setcurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section className='max-w-6xl m-auto px-6 flex flex-col items-start gap-y-12'>
      <div className='row w-full flex flex-col gap-y-3'>
        <h2 className='text-primary font-secondary uppercase text-xs'>{menu[6][lan].title}</h2>
        <h1 className='text-4xl lg:text-5xl font-secondary-black uppercase text-wrap border-b pb-6 border-black'>
          {data.title}
        </h1>
        <div className='text-right font-bold text-2xl'>
          <span className='text-primary mr-1'>_</span>
          {data.date}
        </div>
      </div>
      {data.video && (
        <div className='row w-full'>
          <ReactPlayer
            url={data.video}
            playing={true}
            controls={true}
            width='100%'
            height='100%'
            className='aspect-video block'
          />
        </div>
      )}
      {data.text && (
        <div>
          <p className='text-wrap whitespace-break-spaces'>{data.text}</p>
        </div>
      )}
      {data.url && (
        <a
          href={data.url}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full px-6 w-52 py-3 font-bold bg-primary text-sm text-center button-black-hover'
        >
          {texts.link}
        </a>
      )}
      {data.image_main && (
        <div className='row w-full'>
          <Image
            src={data.image_main}
            alt={data.title}
          />
        </div>
      )}
      {loadingImages ? (
        <div>
          <BeatLoader />
        </div>
      ) : (
        <div className='row w-full grid grid-cols-2 lg:grid-cols-3 justify-between gap-3 mb-12'>
          {dataImages.map(item => (
            <Imagenes
              data={item}
              setCurrentImage={setCurrentImage}
            />
          ))}
        </div>
      )}

      {currentImage && (
        <Modal
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          handelNext={handelNext}
          handelPrev={handelPrev}
        />
      )}
    </section>
  )
}

export default DetallesComponent
