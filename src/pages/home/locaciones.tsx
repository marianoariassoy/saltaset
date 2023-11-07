import { Link } from 'wouter'
import LocacionesItem from '../../components/LocacionesItem'
import Search from '../../components/Search'
import { Line } from '../../icons/icons'
import { menu } from '../../data/data'

const Locaciones = ({ lan }) => {
  const data = [
    {
      id: 1,
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 6,
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ]

  return (
    <section id='locaciones'>
      <div className='row w-full max-w-6xl m-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-6 justify-between items-end'>
        <div className='col text-4xl lg:text-5xl'>
          <span className='text-primary font-secondary-black mb-4 flex items-center gap-x-4'>
            03 <Line />
          </span>
          <span className='block font-secondary-black uppercase'>{menu[2][lan].title}</span>
        </div>
        <div className='col flex lg:justify-end'>
          <Search lan={lan} />
        </div>
      </div>

      <section className='row grid lg:grid-cols-3 2xl:grid-cols-4 gap-3 pb-6'>
        {data.map(data => (
          <LocacionesItem
            key={data.id}
            data={data}
          />
        ))}
      </section>

      <div className='flex justify-center pb-20 mt-8'>
        <Link href='/locaciones'>
          <a className='bg-primary py-3 px-12 rounded-full font-bold button-black-hover text-sm'>VER MAS LOCACIONES</a>
        </Link>
      </div>
    </section>
  )
}

export default Locaciones
