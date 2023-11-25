import { Link } from 'wouter'
import LocacionesItem from '../../components/LocacionesItem'
import Search from '../../components/Search'
import { Line } from '../../icons/icons'
import { menu } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Locaciones = ({ lan }) => {
  const { data: data, loading: loading } = useFetch(`/home/locaciones/${lan}`)

  const texts = {
    ES: {
      link: 'VER MAS LOCACIONES'
    },
    EN: {
      link: 'VIEW MORE LOCATIONS'
    },
    FR: {
      link: 'VOIR PLUS DE LOCALISATIONS'
    }
  }

  return (
    <section id='locaciones'>
      <div className='row w-full max-w-6xl m-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-6 justify-between items-end reveal-on-scroll'>
        <div className='col text-4xl lg:text-5xl'>
          <span className='text-primary font-secondary-black mb-4 flex items-center gap-x-4'>
            03 <Line />
          </span>
          <span className='block font-secondary-black uppercase'>{menu[2][lan].title}</span>
        </div>
        <div className='col flex lg:justify-end'>
          <Search
            lan={lan}
            value=''
          />
        </div>
      </div>

      <section className='row grid lg:grid-cols-3 gap-3 pb-6'>
        {loading ? (
          <div className='w-full h-60 flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          data.map(item => (
            <LocacionesItem
              key={item.id}
              data={item}
            />
          ))
        )}
      </section>

      <div className='flex justify-center pb-20 mt-8'>
        <Link href='/locaciones'>
          <a className='bg-primary py-3 px-12 rounded-full font-bold button-black-hover text-sm'>{texts[lan].link}</a>
        </Link>
      </div>
    </section>
  )
}

export default Locaciones
