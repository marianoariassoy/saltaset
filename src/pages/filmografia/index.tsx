import { useState, useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { filmografiaMenu, menu } from '../../data/data'
import Layout from '../../layout/Layout'
import FilmografiaItem from './FilmografiaItem'
import { Line } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()
  const [category, setCategory] = useState(filmografiaMenu[0]['ES'].title.toLocaleLowerCase())

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = [
    {
      title: 'La mujer sin cabeza',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      year: 2008,
      director: 'Lucrecia Martel'
    },
    {
      title: 'La mujer sin cabeza',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      year: 2008,
      director: 'Lucrecia Martel'
    },
    {
      title: 'La mujer sin cabeza',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      year: 2008,
      director: 'Lucrecia Martel'
    },
    {
      title: 'La mujer sin cabeza',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      year: 2008,
      director: 'Lucrecia Martel'
    },
    {
      title: 'La mujer sin cabeza',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      year: 2008,
      director: 'Lucrecia Martel'
    },
    {
      title: 'La mujer sin cabeza',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      year: 2008,
      director: 'Lucrecia Martel'
    },
    {
      title: 'La mujer sin cabeza',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600',
      year: 2008,
      director: 'Lucrecia Martel'
    }
  ]

  return (
    <Layout>
      <section
        className='my-24'
        id='filmografia'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20'>
          <div className='row mb-12'>
            <div className='col flex items-center gap-x-4'>
              <h1 className='text-3xl lg:text-4xl font-secondary-black uppercase'>{menu[4][lan].title}</h1>
              <span className='text-primary'>
                <Line />
              </span>
            </div>
          </div>

          <div className='row flex flex-wrap gap-4 mb-12'>
            {filmografiaMenu.map((data, index) => (
              <button
                key={index}
                className={`rounded-full w-52 py-2 uppercase font-bold text-xm  ${
                  category === data['ES'].title.toLocaleLowerCase()
                    ? 'bg-primary border-primary text-secondary'
                    : 'bg-secondary text-white button-primary-hover'
                }`}
                onClick={() => setCategory(data['ES'].title.toLocaleLowerCase())}
              >
                {data[lan].title}
              </button>
            ))}
          </div>

          <div className='row grid lg:grid-cols-4 gap-12'>
            {data.map((data, index) => (
              <FilmografiaItem
                key={index}
                data={data}
              />
            ))}
          </div>
        </section>
      </section>
      <HeadProvider>
        <Title>{menu[4][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
