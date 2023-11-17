import { useState, useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import LocacionesItem from '../../components/LocacionesItem'
import { Line } from '../../icons/icons'
import Search from '../../components/Search'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import Categorias from './Categorias'

const Index = () => {
  const { lan } = useDataContext()
  const [section, setSection] = useState(1)
  const [category, setCategory] = useState(1)

  const { data, loading, setLoading } = useFetch(`/locaciones/${category}/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='mt-24'
        id='locaciones'
      >
        <section className='px-6 lg:px-12 pt-20'>
          <div className='row grid lg:grid-cols-2 gap-6 justify-between items-center mb-10'>
            <div className='col flex items-center gap-x-4'>
              <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{menu[2][lan].title}</h1>
              <span className='text-primary'>
                <Line />
              </span>
            </div>
            <div className='col flex lg:justify-end'>
              <Search
                lan={lan}
                value=''
              />
            </div>
          </div>
        </section>

        <Categorias
          lan={lan}
          section={section}
          setSection={setSection}
          category={category}
          setCategory={setCategory}
          setLoading={setLoading}
        />

        {loading ? (
          <div className='px-6 lg:px-12 mb-12'>
            <BeatLoader />
          </div>
        ) : (
          <section className='row grid lg:grid-cols-3 gap-3 pb-12'>
            {data.map(item => (
              <LocacionesItem
                key={item.id}
                data={item}
              />
            ))}
          </section>
        )}
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[2][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
