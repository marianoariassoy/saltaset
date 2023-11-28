import { useState, useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useLocation } from 'wouter'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import { Line } from '../../icons/icons'
import Search from '../../components/Search'
import { useDataContext } from '../../context/useDataContext'
import Locaciones from './Locaciones'
import RutasTuristicas from './RutasTuristicas'
import LocacionesTodas from './LocacionesTodas'

const Index = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()
  const [section, setSection] = useState(2)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location === '/locaciones/rutas-turisticas') {
      setSection(3)
    } else if (location === '/locaciones/categorias') {
      setSection(1)
    } else if (location === '/locaciones/regiones') {
      setSection(2)
    }
  }, [location])

  const handleSections = (id: number) => {
    setSection(id)
  }

  return (
    <Layout>
      <section
        className='mt-24'
        id='locaciones'
      >
        <section className='px-6 lg:px-12 pt-20'>
          <header className='row grid lg:grid-cols-2 gap-x-3 justify-between items-center mb-12'>
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
          </header>
          <div className='row flex-wrap gap-4 mb-4 hidden lg:flex'>
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
            <button
              className={`rounded-full w-52 py-3 uppercase font-bold text-xm ${
                section === 0
                  ? 'bg-primary border-primary text-secondary'
                  : 'bg-secondary text-white button-primary-hover'
              }`}
              onClick={() => handleSections(0)}
            >
              Todas
            </button>
          </div>
          <div className='lg:hidden'>
            <select
              name='section'
              className='w-full bg-primary font-bold px-6 py-3 rounded-full mb-3 appearance-none'
            >
              {menu[2][lan].categories.map(item => (
                <option
                  key={item.id}
                  className='text-sm '
                  onClick={() => handleSections(item.id)}
                >
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </section>

        {section === 0 && <LocacionesTodas lan={lan} />}

        {section === 1 && (
          <Locaciones
            lan={lan}
            section={section}
          />
        )}

        {section === 2 && (
          <Locaciones
            lan={lan}
            section={section}
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
