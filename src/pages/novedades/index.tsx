import { useEffect, useState } from 'react'
import { HeadProvider, Title } from 'react-head'
import NovedadesItem from './../home/NovedadesItem'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { menu } from '../../data/data'

const Index = () => {
  const { lan } = useDataContext()
  const [show, setShow] = useState(4)
  const { data, loading } = useFetch(`/novedades/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const texts = {
    ES: {
      link: 'Ver noticias anteriores'
    },
    EN: {
      link: 'View previous news'
    },
    FR: {
      link: 'Voir les anciennes nouvelles'
    }
  }

  return (
    <Layout>
      <section className='bg-primary py-12 lg:py-24'>
        <div className='w-full max-w-6xl m-auto px-6'>
          <div className='row text-4xl lg:text-5xl mb-12'>
            <span className='block font-secondary-black uppercase'>{menu[6][lan].title}</span>
          </div>
          <div className='row flex flex-col gap-y-6'>
            {loading ? (
              <Loader />
            ) : (
              data.slice(0, show).map(item => (
                <NovedadesItem
                  key={item.id}
                  data={item}
                  lan={lan}
                />
              ))
            )}
          </div>
          <div className='row border-t border-black mt-8 pt-12 flex justify-center'>
            {!loading && show < data.length && (
              <button
                className='bg-secondary py-3 px-12 rounded-full font-bold inline-block button-secondary text-primary text-sm uppercase'
                onClick={() => setShow(show + 2)}
              >
                + {texts[lan].link}
              </button>
            )}
          </div>
        </div>
      </section>
      <HeadProvider>
        <Title>Salta Set {data && '• ' + data[0].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
