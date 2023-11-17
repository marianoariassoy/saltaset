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

const Index = () => {
  const { lan } = useDataContext()
  const [section, setSection] = useState(1)
  const [category, setCategory] = useState(1)

  const { data: dataSections, loading: loadingSections } = useFetch(`/locaciones/secciones/${lan}`)
  const {
    data: dataCategories,
    loading: loadingCategories,
    setLoading: setLoadingCategories
  } = useFetch(`/locaciones/secciones/categorias/${section}/${lan}`)
  const { data, loading, setLoading } = useFetch(`/locaciones/${category}/${lan}`)

  useEffect(() => {
    !loadingCategories && setCategory(dataCategories[0].id)
  }, [section, dataCategories, loadingCategories])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSections = (id: number) => {
    setLoadingCategories(true)
    setLoading(true)
    setSection(id)
  }

  const handleCategories = (id: number) => {
    setLoading(true)
    setCategory(id)
  }

  return (
    <Layout>
      <section
        className='mt-24'
        id='locaciones'
      >
        <section className='row w-full px-6 lg:px-12 pt-20 pb-12'>
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

          <div className='row flex flex-wrap justify-around lg:justify-normal gap-4 mb-4'>
            {loadingSections ? (
              <div className='my-2'>
                <BeatLoader />
              </div>
            ) : (
              dataSections.map((item, index) => (
                <button
                  key={index}
                  className={`rounded-full w-52 py-3 uppercase font-bold text-xs ${
                    section === item.id
                      ? 'bg-primary border-primary text-secondary'
                      : 'bg-secondary text-white button-primary-hover'
                  }`}
                  onClick={() => handleSections(item.id)}
                >
                  {item.title}
                </button>
              ))
            )}
          </div>
          <div className='row flex flex-wrap justify-around lg:justify-normal gap-4'>
            {loadingCategories ? (
              <div className='my-2'>
                <BeatLoader />
              </div>
            ) : (
              dataCategories.map(item => (
                <button
                  key={item.id}
                  className={`rounded-full w-52 py-3 uppercase font-bold text-xs  ${
                    category === item.id
                      ? 'bg-primary border-primary text-secondary'
                      : 'bg-secondary text-primary button-primary-hover'
                  }`}
                  onClick={() => handleCategories(item.id)}
                >
                  {item.title}
                </button>
              ))
            )}
          </div>
        </section>

        {loading ? (
          <div className='px-6 lg:px-12 mb-12'>
            <BeatLoader />
          </div>
        ) : (
          <section className='row grid lg:grid-cols-2 2xl:grid-cols-3 gap-3 pb-12'>
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
        <Title>{menu[2][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
