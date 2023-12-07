import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'wouter'
import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import { Line, Left } from '../../icons/icons'
import { menu } from '../../data/data'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

const Listado = () => {
  const { lan } = useDataContext()
  const [location, setLocation] = useLocation()
  const { id } = useParams()
  let options

  const texts = {
    ES: {
      link: 'Volver',
      link2: 'Sitio web',
      error: 'No se encontraron resultados'
    },
    EN: {
      link: 'Back',
      link2: 'Web site',
      error: 'No results found'
    },
    FR: {
      link: 'Retour',
      link2: 'Site internet',
      error: 'Aucun résultat'
    }
  }

  if (location.includes('/directorio/empresas')) {
    options = {
      title: menu[3][lan].categories[0].title,
      type: 'empresas'
    }
  } else {
    options = {
      title: menu[3][lan].categories[1].title,
      type: 'profesionales'
    }
  }

  const { data, loading, error } = useFetch(`/directorios/items/detalles/${id}/${lan}`)
  if (error) setLocation(`/error`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='my-12 lg:my-24 px-6 lg:px-12'>
        <div className='row flex flex-col items-start gap-3 lg:flex-row lg:justify-between lg:items-center mb-12'>
          <div className='col flex items-center gap-x-4'>
            <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{options.title}</h1>
            <span className='text-primary'>
              <Line />
            </span>
          </div>
          <div>
            <Link href={`/directorio/${options.type}`}>
              <a className='rounded-full px-6 py-3 uppercase font-bold bg-primary text-sm button-black-hover flex justify-between items-center gap-x-2'>
                <Left />
                <span>{texts[lan].link}</span>
              </a>
            </Link>
          </div>
        </div>
        {loading ? (
          <div>
            <BeatLoader />
          </div>
        ) : data ? (
          data.map(item => (
            <section className='max-w-5xl'>
              <h2 className='text-3xl font-bold mb-6'>{item.title}</h2>
              <div className='flex gap-4 mb-6 flex-wrap'>
                <p className='text-wrap mb-3'>{item.text}</p>

                {item.email && (
                  <a
                    href={`mailto:${item.url}`}
                    className='rounded-full px-6 py-3 font-bold bg-primary text-sm button-black-hover  inline-block'
                  >
                    {item.email}
                  </a>
                )}
                {item.phone && (
                  <a
                    href={`tel:${item.phone}`}
                    className='rounded-full px-6 py-3 font-bold bg-primary text-sm button-black-hover uppercase inline-block'
                  >
                    {item.phone}
                  </a>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full px-6 py-3 font-bold bg-primary text-sm button-black-hover uppercase inline-block'
                  >
                    {texts[lan].link2}
                  </a>
                )}
              </div>
            </section>
          ))
        ) : (
          <p className='text-2xl'>{texts[lan].error}</p>
        )}
      </section>
      <HeadProvider>
        <Title>Salta Set {data && '• ' + data[0].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Listado
