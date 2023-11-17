import { useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import Categorias from './CategoriaItem'
import { menu } from '../../data/data'
import { Line, Right } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

const Index = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()
  let texts

  if (location === '/directorio/empresas') {
    texts = {
      title: menu[3][lan].categories[0].title,
      type: 'empresas',
      ES: {
        link: 'Inscribí tu empresa'
      },
      EN: {
        link: 'Register your company'
      },
      FR: {
        link: 'Enregistrez votre entreprise'
      }
    }
  } else {
    texts = {
      title: menu[3][lan].categories[1].title,
      type: 'profesionales',
      ES: {
        link: 'Registrate'
      },
      EN: {
        link: 'Register'
      },
      FR: {
        link: 'Enregistrez'
      }
    }
  }

  const { data, loading, setLoading } = useFetch(`/directorios/categorias/${texts.type}/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
  }, [location, setLoading])

  return (
    <Layout>
      <section
        className='mt-24'
        id='directorio'
      >
        <section className='row w-full px-6 lg:px-12 pt-20 pb-12'>
          <div className='row flex flex-col items-start gap-3 lg:flex-row lg:justify-between lg:items-center mb-12 lg:mb-20'>
            <div className='col flex items-center gap-x-4'>
              <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{texts.title}</h1>
              <span className='text-primary'>
                <Line />
              </span>
            </div>
            <div>
              <Link href={`/directorio/${texts.type}/formulario`}>
                <a className='rounded-full px-6 py-3 uppercase font-bold bg-primary text-sm button-black-hover flex justify-between items-center gap-x-2'>
                  <span>{texts[lan].link}</span>
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
                  type={texts.type}
                />
              ))
            )}
          </section>
        </section>
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[3][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
