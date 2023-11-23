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

  return (
    <section className='row w-full max-w-6xl m-auto px-6 pt-20 flex flex-col items-start gap-y-12'>
      <div className='row flex flex-col gap-y-3'>
        <div className='text-primary font-secondary uppercase text-xs'>
          <Link to={`/locaciones`}>
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
      {data.text.lenght > 0 && (
        <div>
          <p className='text-wrap whitespace-break-spaces'>{data.text}</p>
        </div>
      )}
      {loadingImages ? (
        <div>
          <BeatLoader />
        </div>
      ) : (
        <div className='row grid grid-cols-2 lg:grid-cols-3 justify-between'>
          {dataImages.map(item => (
            <Imagenes
              data={item}
              setCurrentVideo={setCurrentImage}
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

      {currentImage && (
        <Modal
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      )}
    </section>
  )
}

export default DetallesComponent
