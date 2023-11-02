import { useState, useEffect } from 'react'
import Layout from '../../layout/Layout'
import LocacionesItem from '../../components/LocacionesItem'
import { Line } from '../../icons/icons'
import Search from '../../components/Search'
import { locacionesMenu, menu } from '../../data/data'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()
  const [category, setCategory] = useState(locacionesMenu[0]['ES'].title.toLocaleLowerCase())
  const [location, setLocation] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  const locaciones = {
    catalogo: [
      {
        id: 1,
        ES: {
          title: 'Campo y Agricultura'
        },
        EN: {
          title: 'Farm and Agriculture'
        },
        FR: {
          title: 'Farm and Agriculture'
        }
      },
      {
        id: 2,
        ES: {
          title: 'Agua'
        },
        EN: {
          title: 'Water'
        },
        FR: {
          title: 'Water'
        }
      },
      {
        id: 3,
        ES: {
          title: 'Edificios centenarios'
        },
        EN: {
          title: 'Bulding century'
        },
        FR: {
          title: 'Bulding century'
        }
      }
    ],
    regiones: [
      {
        id: 4,
        ES: {
          title: 'Salta y alrededores'
        },
        EN: {
          title: 'Salta y alrededores'
        },
        FR: {
          title: 'Salta y alrededores'
        }
      },
      {
        id: 5,
        ES: {
          title: 'Valle de lerma'
        },
        EN: {
          title: 'Valle de lerma'
        },
        FR: {
          title: 'Valle de lerma'
        }
      },
      {
        id: 6,
        ES: {
          title: 'Valle calchaquí'
        },
        EN: {
          title: 'Valle calchaquí'
        },
        FR: {
          title: 'Valle calchaquí'
        }
      },
      {
        id: 15,
        ES: {
          title: 'Valle calchaquí'
        },
        EN: {
          title: 'Valle calchaquí'
        },
        FR: {
          title: 'Valle calchaquí'
        }
      },
      {
        id: 16,
        ES: {
          title: 'Valle calchaquí'
        },
        EN: {
          title: 'Valle calchaquí'
        },
        FR: {
          title: 'Valle calchaquí'
        }
      },
      {
        id: 111,
        ES: {
          title: 'Valle calchaquí'
        },
        EN: {
          title: 'Valle calchaquí'
        },
        FR: {
          title: 'Valle calchaquí'
        }
      },
      {
        id: 216,
        ES: {
          title: 'Valle calchaquí'
        },
        EN: {
          title: 'Valle calchaquí'
        },
        FR: {
          title: 'Valle calchaquí'
        }
      }
    ],
    'rutas turisticas': [
      {
        id: 7,
        ES: {
          title: 'Sistema de valladino'
        },
        EN: {
          title: 'Sistema de valladino'
        },
        FR: {
          title: 'Sistema de valladino'
        }
      },
      {
        id: 8,
        ES: {
          title: 'Ruta del vino'
        },
        EN: {
          title: 'Ruta del vino'
        },
        FR: {
          title: 'Ruta del vino'
        }
      },
      {
        id: 9,
        ES: {
          title: 'Turismo religioso'
        },
        EN: {
          title: 'Turismo religios'
        },
        FR: {
          title: 'Turismo religios'
        }
      }
    ]
  }

  return (
    <Layout>
      <section
        className='my-24'
        id='locaciones'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20 pb-12'>
          <div className='row grid lg:grid-cols-2 gap-6 justify-between items-end mb-10'>
            <div className='col flex items-center gap-x-4'>
              <h1 className='text-3xl lg:text-4xl font-secondary-black uppercase'>{menu[2][lan].title}</h1>
              <span className='text-primary'>
                <Line />
              </span>
            </div>
            <div className='col flex lg:justify-end'>
              <Search />
            </div>
          </div>

          <div className='row flex flex-wrap gap-4 mb-4'>
            {locacionesMenu.map((data, index) => (
              <button
                key={index}
                className={`rounded-full w-52 py-2 uppercase font-bold text-xs ${
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

          <div className='row flex flex-wrap gap-4'>
            {locaciones[category].map(data => (
              <button
                key={data.id}
                className={`rounded-full w-52 py-2 uppercase font-bold text-xs  ${
                  location === data.id
                    ? 'bg-primary border-primary text-secondary'
                    : 'bg-secondary text-primary button-primary-hover'
                }`}
                onClick={() => setLocation(data.id)}
              >
                {data[lan].title}
              </button>
            ))}
          </div>
        </section>

        <section className='row grid lg:grid-cols-3 gap-3 px-6 pb-6'>
          {data.map((data, index) => (
            <LocacionesItem
              key={index}
              title={data.title}
              image={data.image}
            />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Index
