import { useState } from 'react'
import { Line } from '../../icons/icons'
import NovedadesItem from './NovedadesItem'

const Novedades = () => {
  const [show, setShow] = useState(2)

  const data = [
    {
      id: 1,
      title: 'Aeropuerto de Salta',
      date: '10/10/2023',
      image: '/images/home-1.webp',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit  '
    },
    {
      id: 2,
      title: 'Aeropuerto de Salta',
      date: '10/10/2023',
      image: '/images/home-1.webp',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit  '
    },
    {
      id: 2,
      title: 'Aeropuerto de Salta',
      date: '10/10/2023',
      image: '/images/home-1.webp',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit  '
    },
    {
      id: 2,
      title: 'Aeropuerto de Salta',
      date: '10/10/2023',
      image: '/images/home-1.webp',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit  '
    },
    {
      id: 2,
      title: 'Aeropuerto de Salta',
      date: '10/10/2023',
      image: '/images/home-1.webp',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit  '
    },
    {
      id: 2,
      title: 'Aeropuerto de Salta',
      date: '10/10/2023',
      image: '/images/home-1.webp',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  suscipit  '
    }
  ]

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
          <span className='block font-secondary-black'>
            NOVEDA
            <br className='lg:hidden' />
            DES
          </span>
        </div>
        <div className='row flex flex-col gap-y-6'>
          {data.slice(0, show).map(data => (
            <NovedadesItem
              key={data.id}
              data={data}
            />
          ))}
        </div>
        <div className='row border-t border-black mt-8 pt-12 flex justify-center'>
          {show < data.length && (
            <button
              className='bg-secondary py-3 px-12 rounded-full font-bold inline-block button-secondary text-primary text-sm'
              onClick={() => setShow(show + 2)}
            >
              + VER NOTICIAS ANTERIORES
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Novedades
