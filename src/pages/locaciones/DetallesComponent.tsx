import { useState } from 'react'
import { Link } from 'wouter'
import { Line } from '../../icons/icons'
import ReactPlayer from 'react-player'
import Imagenes from './Imagenes'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import Modal from './Modal'

const DetallesComponent = ({ data, title, texts }) => {
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
    <section className='row w-full max-w-6xl m-auto px-6 flex flex-col items-start'>
      <header className='row flex flex-col gap-y-3 mb-6 lg:mb-12'>
        <div className='text-primary font-secondary uppercase text-xs'>
          <Link to={`/locaciones/regiones`}>
            <a className='hover:text-black mr-1'>{title}</a>
          </Link>
          / {data.category}
        </div>
        <div className='flex gap-x-6 items-center'>
          <h1 className='text-4xl lg:text-5xl font-secondary-black uppercase text-wrap'>{data.title}</h1>
          <div className='text-primary'>
            <Line />
          </div>
        </div>
      </header>
      {data.video && (
        <div className='row w-full mb-6'>
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
        <div className='mb-12'>
          <p className='text-wrap whitespace-break-spaces'>{data.text}</p>
        </div>
      )}
      {data.url && (
        <a
          href={data.url}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full px-6 w-52 py-3 font-bold bg-primary text-sm text-center button-black-hover mb-6'
        >
          {texts.link}
        </a>
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
      {data.googlemap && (
        <iframe
          title='Google Maps'
          width='100%'
          height='500'
          style={{ border: 0 }}
          src={data.googlemap}
          allowFullScreen
        ></iframe>
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
