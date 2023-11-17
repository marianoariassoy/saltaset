import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import { useDataContext } from '../../context/useDataContext'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import { Line } from '../../icons/icons'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import Imagenes from './Imagenes'
import Modal from './Modal'

const Detalles = () => {
  const { lan } = useDataContext()
  const { id } = useParams()
  const { data, loading, error } = useFetch(`/locaciones/detalles/${id}/${lan}`)
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${id}`)
  const [currentImage, setCurrentImage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <Layout>
      <section
        className='my-24'
        id='locaciones-detalles'
      >
        {loading ? (
          <div className='row w-full flex items-center justify-end'>
            <BeatLoader />
          </div>
        ) : (
          <section className='row w-full max-w-6xl m-auto px-6 pt-20 flex flex-col gap-y-12'>
            <div className='row'>
              <div className='text-primary font-bold mb-3 uppercase'>
                {menu[2][lan].title}/ {data[0].category}
              </div>
              <div className='flex gap-x-6 items-center'>
                <div className='text-4xl lg:text-5xl'>
                  <span className='block font-secondary-black uppercase'>{data[0].title}</span>
                </div>
                <div className='text-primary'>
                  <Line />
                </div>
              </div>
            </div>
            {data[0].video && (
              <div className='row w-full'>
                <ReactPlayer
                  url={data[0].video}
                  playing={true}
                  controls={true}
                  width='100%'
                  height='100%'
                  className='aspect-video block'
                />
              </div>
            )}

            <div className='row'>
              <p className='text-wrap whitespace-break-spaces'>{data[0].text}</p>
            </div>

            {loadingImages ? (
              <div className='row w-full flex items-center justify-center'>
                <BeatLoader />
              </div>
            ) : (
              <div className='row grid grid-cols-2 lg:grid-cols-3'>
                {dataImages.map(item => (
                  <Imagenes
                    data={item}
                    setCurrentVideo={setCurrentImage}
                  />
                ))}
              </div>
            )}

            {data[0].googlemap && (
              <iframe
                title='Google Maps'
                width='100%'
                height='500'
                style={{ border: 0 }}
                src={data[0].googlemap}
                allowFullScreen
              ></iframe>
            )}
          </section>
        )}
      </section>
      {currentImage && (
        <Modal
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      )}
      <HeadProvider>
        <Title>{data ? data[0].title : menu[2][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Detalles
