import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import LocacionesItem from '../../components/LocacionesItem'
import { Line } from '../../icons/icons'
import Search from '../../components/Search'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { useParams } from 'wouter'

const Index = () => {
  const { lan } = useDataContext()
  const { buscar } = useParams()
  const { data, loading, error } = useFetch(`/locaciones/buscar/ES/${buscar}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (error) {
    return <h1>{error}</h1>
  }

  const texts = {
    ES: {
      title: 'No se encontraron resultados'
    },
    EN: {
      title: 'No results found'
    },
    FR: {
      title: 'Aucun résultat'
    }
  }

  return (
    <Layout>
      <section
        className='my-24'
        id='locaciones-buscar'
      >
        <section className='row w-full px-6 lg:px-12 pb-6'>
          <div className='row grid lg:grid-cols-2 gap-x-3 justify-between items-center mb-10'>
            <div className='col flex items-center gap-x-4'>
              <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{menu[2][lan].title}</h1>
              <span className='text-primary'>
                <Line />
              </span>
            </div>
            <div className='col flex lg:justify-end'>
              <Search
                lan={lan}
                value={buscar}
              />
            </div>
          </div>
        </section>
        {loading ? (
          <div className='px-6 lg:px-12'>
            <BeatLoader />
          </div>
        ) : data.length > 0 ? (
          <section className='row w-full grid lg:grid-cols-3 gap-3 pb-6'>
            {data.map(item => (
              <LocacionesItem
                key={item.id}
                data={item}
              />
            ))}
          </section>
        ) : (
          <div className='px-6 lg:px-12 text-2xl'>
            <h1>{texts[lan].title}</h1>
          </div>
        )}
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[2][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
