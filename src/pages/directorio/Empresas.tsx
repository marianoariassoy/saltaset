import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import { Link } from 'wouter'
import Layout from '../../layout/Layout'
import { Line, Right } from '../../icons/icons'
import Categorias from './Categorias'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/directorios/empresas/categorias/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const texts = {
    ES: {
      title: 'Inscribí tu empresa'
    },
    EN: {
      title: 'Register your company'
    },
    FR: {
      title: 'Enregistrez votre entreprise'
    }
  }

  return (
    <Layout>
      <section
        className='my-24'
        id='locaciones'
      >
        <section className='row w-full px-6 lg:px-12 pt-20 pb-12'>
          <div className='row flex flex-col items-start gap-3 lg:flex-row lg:justify-between lg:items-center mb-20'>
            <div className='col flex items-center gap-x-4'>
              <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>
                {menu[3][lan].categories[0].title}
              </h1>
              <span className='text-primary'>
                <Line />
              </span>
            </div>
            <div>
              <Link href='/directorio/empresas/formulario'>
                <a
                  href='#'
                  className='rounded-full px-6 py-2 uppercase font-bold bg-primary text-sm text-center button-black-hover flex justify-between items-center gap-x-2'
                >
                  <span>{texts[lan].title}</span>
                  <Right />
                </a>
              </Link>
            </div>
          </div>
          <section className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
            {loading ? (
              <div>
                <BeatLoader />
              </div>
            ) : (
              data.map(item => (
                <Categorias
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  lan={lan}
                  type='empresas'
                />
              ))
            )}
          </section>
        </section>
      </section>
      <HeadProvider>
        <Title>{menu[3][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
