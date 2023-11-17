import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'wouter'
import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import { menu } from '../../data/data'
import { Line, Right } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

const Listado = () => {
  const { lan } = useDataContext()
  const [location, setLocation] = useLocation()
  const { scid } = useParams()
  let options

  const texts = {
    ES: {
      link: 'Volver',
      error: 'No se encontraron resultados'
    },
    EN: {
      link: 'Back',
      error: 'No results found'
    },
    FR: {
      link: 'Retour',
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

  const { data, loading, error } = useFetch(`/directorios/items/${scid}/${lan}`)
  if (error) setLocation(`/error`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='mt-24'
        id='directorio-listado'
      >
        <section className='row w-full px-6 lg:px-12 pt-20 pb-12'>
          <div className='row flex flex-col items-start gap-3 lg:flex-row lg:justify-between lg:items-center mb-12 lg:mb-20'>
            <div className='col flex items-center gap-x-4'>
              <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{options.title}</h1>
              <span className='text-primary'>
                <Line />
              </span>
            </div>
            <div>
              <Link href={`/directorio/${options.type}`}>
                <a className='rounded-full px-6 py-3 uppercase font-bold bg-primary text-sm button-black-hover flex justify-between items-center gap-x-2'>
                  <span>{texts[lan].link}</span>
                  <Right />
                </a>
              </Link>
            </div>
          </div>
          <section>
            <h2 className='font-bold'>{data && data[0].subcategory}</h2>
            {loading ? (
              <div>
                <BeatLoader />
              </div>
            ) : (
              <div className='flex flex-col items-start'>
                {data ? (
                  data.map(item => (
                    <Link
                      to={`/directorio/${options.type}/detalles/${item.id}`}
                      key={item.id}
                    >
                      <a className='link-primary'>{item.title}</a>
                    </Link>
                  ))
                ) : (
                  <p className='text-2xl'>{texts[lan].error}</p>
                )}
              </div>
            )}
          </section>
        </section>
      </section>
      <HeadProvider>
        <Title>Salta Set {data && '• ' + data[0].subcategory}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Listado
