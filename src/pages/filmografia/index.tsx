import { useState, useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import FilmografiaItem from './FilmografiaItem'
import { Line } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

const Index = () => {
  const { lan } = useDataContext()
  const [category, setCategory] = useState(4)
  const { data, loading, setLoading } = useFetch(`/filmografia/${category}/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCategory = (id: number) => {
    setLoading(true)
    setCategory(id)
  }
  return (
    <Layout>
      <section
        className='my-24 px-6 lg:px-12 pt-20'
        id='filmografia'
      >
        <div className='row mb-12'>
          <div className='col flex items-center gap-x-4'>
            <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{menu[4][lan].title}</h1>
            <span className='text-primary'>
              <Line />
            </span>
          </div>
        </div>

        <div className='row flex flex-wrap gap-4 mb-12'>
          {menu[4][lan].categories.map(item => (
            <button
              key={item.id}
              className={`rounded-full w-52 py-3 uppercase font-bold text-xm ${
                category === item.id
                  ? 'bg-primary border-primary text-secondary'
                  : 'bg-secondary text-white button-primary-hover'
              }`}
              onClick={() => handleCategory(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className='row grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-12'>
          {loading ? (
            <div>
              <BeatLoader />
            </div>
          ) : (
            data.map(item => (
              <FilmografiaItem
                key={item.id}
                data={item}
                lan={lan}
              />
            ))
          )}
        </div>
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[4][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
