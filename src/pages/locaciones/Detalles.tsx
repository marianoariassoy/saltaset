import { useEffect } from 'react'
import { useParams } from 'wouter'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import DetallesComponent from './DetallesComponent'

const Detalles = () => {
  const { lan } = useDataContext()
  const { id } = useParams()
  const { data, loading } = useFetch(`/locaciones/detalles/${id}/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const texts = {
    ES: {
      link: 'VER LINK',
      error: 'No se encontraron resultados'
    },
    EN: {
      link: 'VIEW LINK',
      error: 'No results found'
    },
    FR: {
      link: 'VOIR LE LIEN',
      error: 'Aucun résultat'
    }
  }

  return (
    <Layout>
      <section
        className='my-24'
        id='locaciones-detalles'
      >
        {loading ? (
          <div>
            <BeatLoader />
          </div>
        ) : data ? (
          <DetallesComponent
            data={data[0]}
            title={menu[2][lan].title}
            texts={texts[lan]}
          />
        ) : (
          <div className='text-2xl'>{texts[lan].error}</div>
        )}
      </section>
      <HeadProvider>
        <Title>{data ? data[0].title : menu[2][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Detalles
