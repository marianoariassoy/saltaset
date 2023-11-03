import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import { Line } from '../../icons/icons'
import { menu } from '../../data/data'
import ImageComponent from '../../components/Image'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='my-24'
        id='profesionales-form'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20 mb-12'>
          <div className='flex items-center gap-x-4'>
            <h1 className='text-3xl lg:text-4xl font-secondary-black uppercase'>{menu[3][lan].categories[1].title}</h1>
            <span className='text-primary'>
              <Line />
            </span>
          </div>
        </section>

        <section className='row w-full aspect-video h-[50vh]'>
          <ImageComponent
            src='/images/formulario.webp'
            alt='Imagen para el formulario'
          />
        </section>
      </section>
      <HeadProvider>
        <Title>
          {menu[3][lan].title} {menu[3][lan].categories[1].title}
        </Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
