import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import { Line } from '../../icons/icons'
import ImageComponent from '../../components/Image'

const Formulario = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const texts = {
    ES: {
      title: 'Registro de producción',
      title1: 'Registro de',
      title2: 'Producción'
    },
    EN: {
      title: 'Production record',
      title1: 'Production',
      title2: 'Record'
    },
    FR: {
      title: 'Registre de production',
      title1: 'Registre de',
      title2: 'Production'
    }
  }

  return (
    <Layout>
      <section
        className='my-24'
        id='beneficios'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20 grid lg:grid-cols-2 gap-12'>
          <div className='col flex flex-col gap-y-6 pr-12'>
            <div className='flex gap-x-6 items-center'>
              <div className='text-4xl lg:text-4xl'>
                <span className='block font-secondary uppercase'>{texts[lan].title1}</span>
                <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
              </div>
              <div className='text-primary'>
                <Line />
              </div>
            </div>
            <p className='text-wrap text-sm mb-6'>
              Registrá tu rodaje para acceder al apoyo logístico y operativo de Salta Set y a todos los beneficios
              contemplados para las producciones. <br /> <br />
              La información que brindes servirá además para dimensionar el crecimiento de la actividad en la provincia
              y, consecuentemente, reforzar los beneficios para el sector. Conocé más sobre los
              <a
                href='#'
                className='text-primary font-bold mx-1 hover:underline underline-offset-2'
              >
                permisos de filmación.
              </a>
            </p>
            <div className='aspect-[5/7]'>
              <ImageComponent
                src='/images/registro-produccion.webp'
                alt='Imagen de camaras de video'
              />
            </div>
          </div>
          <div className='col'>FORM</div>
        </section>
      </section>
      <HeadProvider>
        <Title>{texts[lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Formulario
