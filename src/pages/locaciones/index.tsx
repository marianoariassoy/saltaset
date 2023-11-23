import { useState, useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import { Line } from '../../icons/icons'
import Search from '../../components/Search'
import { useDataContext } from '../../context/useDataContext'
import Locaciones from './Locaciones'
import Categorias from './Categorias'
import RutasTuristicas from './RutasTuristicas'

const Index = () => {
  const { lan } = useDataContext()
  const [section, setSection] = useState(2)
  const [category, setCategory] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSections = (id: number) => {
    setSection(id)
  }

  return (
    <Layout>
      <section
        className='mt-24'
        id='locaciones'
      >
        <section className='px-6 lg:px-12 pt-20 mb-12'>
          <div className='row grid lg:grid-cols-2 gap-x-3 justify-between items-center mb-12'>
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
          <div className='row flex flex-wrap gap-4 mb-4'>
            {menu[2][lan].categories.map(item => (
              <button
                key={item.id}
                className={`rounded-full w-52 py-3 uppercase font-bold text-xm ${
                  section === item.id
                    ? 'bg-primary border-primary text-secondary'
                    : 'bg-secondary text-white button-primary-hover'
                }`}
                onClick={() => handleSections(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
          {section <= 2 && (
            <Categorias
              lan={lan}
              section={section}
              category={category}
              setCategory={setCategory}
            />
          )}
        </section>

        {section <= 2 && (
          <Locaciones
            lan={lan}
            category={category}
          />
        )}

        {section === 3 && <RutasTuristicas lan={lan} />}
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[2][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
