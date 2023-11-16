import { useState } from 'react'
import { Line } from '../../icons/icons'
import NovedadesItem from './NovedadesItem'
import { menu } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Novedades = ({ lan }) => {
  const [show, setShow] = useState(2)
  const { data: data, loading: loading } = useFetch(`/novedades/${lan}`)

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
    <section
      className='bg-primary'
      id='novedades'
    >
      <div className='w-full max-w-6xl m-auto px-6 py-20'>
        <div className='row text-4xl lg:text-5xl mb-12'>
          <span className='font-secondary-black mb-4 flex items-center gap-x-4'>
            04 <Line />
          </span>
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
  )
}

export default Novedades
