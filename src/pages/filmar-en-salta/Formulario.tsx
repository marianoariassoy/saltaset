import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import { Line } from '../../icons/icons'
import ImageComponent from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'
import BeatLoader from 'react-spinners/BeatLoader'
import Form from './Form'

const Formulario = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`)

  const texts = {
    ES: {
      title: 'Registro de',
      title2: 'Producción'
    },
    EN: {
      title: 'Production',
      title2: 'Record'
    },
    FR: {
      title: 'Dossier de',
      title2: 'production'
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='my-24 max-w-6xl m-auto px-6 grid lg:grid-cols-2 gap-12'
        id='registro-produccion'
      >
        <div className='col flex flex-col gap-y-6 lg:pr-12'>
          <header className='flex gap-x-6 items-center'>
            <div className='text-3xl lg:text-5xl'>
              <span className='block font-secondary uppercase'>{texts[lan].title}</span>
              <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
            </div>
            <div className='text-primary'>
              <Line />
            </div>
          </header>
          <p className='text-wrap mb-6'>{loading ? <BeatLoader /> : <HTML text={data[83].text} />}</p>
          <div className='aspect-[5/7]'>
            <ImageComponent
              src='https://api.saltaset.gob.ar/images-statics/registro-produccion.webp'
              alt='Imagen de camaras de video'
            />
          </div>
        </div>
        <div className='col'>
          <Form lan={lan} />
        </div>
      </section>
      <HeadProvider>
        <Title>
          Salta Set &bull; {texts[lan].title} {texts[lan].title2}
        </Title>
      </HeadProvider>
    </Layout>
  )
}

export default Formulario
