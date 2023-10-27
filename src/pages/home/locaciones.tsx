import LocacionesItem from '../../components/LocacionesItem'
import { Line } from '../../icons/icons'

const Locaciones = () => {
  const data = [
    {
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Aeropuerto de Salta',
      image: 'https://images.pexels.com/photos/13430642/pexels-photo-13430642.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ]

  return (
    <section id='locaciones'>
      <div className='row w-full max-w-6xl m-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-6 justify-between items-end'>
        <div className='col text-5xl lg:text-6xl'>
          <span className='text-primary font-secondary-black mb-4 flex items-center gap-x-4'>
            03 <Line />
          </span>
          <span className='block font-secondary-black'>
            LOCACIO
            <br className='lg:hidden' />
            NES
          </span>
        </div>
        <div className='col flex lg:justify-end'>
          <input
            type='text'
            name='search'
            id='input-search'
            placeholder='BUSCAR'
            className='w-full max-w-xs pl-2 pr-8 py-2 border-b border-black text-sm mb-2'
          />
        </div>
      </div>

      <div className='row grid lg:grid-cols-3 gap-3 px-6 pb-6'>
        {data.map((data, index) => (
          <LocacionesItem
            key={index}
            title={data.title}
            image={data.image}
          />
        ))}
      </div>

      <div className='flex justify-center pb-20 mt-8'>
        <a
          href='#'
          className='bg-primary py-3 px-12 rounded-full font-bold button-primary text-sm'
        >
          VER MAS LOCACIONES
        </a>
      </div>
    </section>
  )
}

export default Locaciones
