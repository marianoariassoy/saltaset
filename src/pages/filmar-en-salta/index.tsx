import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { Line } from '../../icons/icons'
import FilmarItem from './FilmarItem'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = [
    {
      id: 1,
      ES: {
        title: 'RODAJE EN SALTA CAPITAL',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      EN: {
        title: 'RODAJE EN SALTA CAPITAL',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      FR: {
        title: 'RODAJE EN SALTA CAPITAL',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      }
    },
    {
      id: 2,
      ES: {
        title: 'RODAJE EN EL RESTO DE LOS MUNICIPIOS',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      EN: {
        title: 'RODAJE EN EL RESTO DE LOS MUNICIPIOS',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      FR: {
        title: 'RODAJE EN EL RESTO DE LOS MUNICIPIOS',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      }
    },
    {
      id: 3,
      ES: {
        title: 'RODAJE EN ÁREAS PROTEGIDAS',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      EN: {
        title: 'RODAJE EN ÁREAS PROTEGIDAS',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      FR: {
        title: 'RODAJE EN ÁREAS PROTEGIDAS',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      }
    },
    {
      id: 4,
      ES: {
        title: 'RODAJE EN PARQUE NACIONALES ',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      EN: {
        title: 'RODAJE EN PARQUE NACIONALES ',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      FR: {
        title: 'RODAJE EN PARQUE NACIONALES ',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      }
    },
    {
      id: 5,
      ES: {
        title: 'RODAJE EN EL AEROPUERTO DE SALTA',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      EN: {
        title: 'RODAJE EN EL AEROPUERTO DE SALTA',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      FR: {
        title: 'RODAJE EN EL AEROPUERTO DE SALTA',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      }
    },
    {
      id: 6,
      ES: {
        title: 'RODAJE QUE IMPLIQUE VIALIDAD NACIONAL',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      EN: {
        title: 'RODAJE QUE IMPLIQUE VIALIDAD NACIONAL',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      FR: {
        title: 'RODAJE QUE IMPLIQUE VIALIDAD NACIONAL',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      }
    },
    {
      id: 7,
      ES: {
        title: 'RODAJE CON MENORES DE EDAD',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      EN: {
        title: 'RODAJE CON MENORES DE EDAD',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      },
      FR: {
        title: 'RODAJE CON MENORES DE EDAD',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore assumenda, iste, reiciendis deleniti vero earum amet, numquam quas accusamus debitis. Maxime fugiat laudantium qui modi sunt quas ex nihil.'
      }
    }
  ]

  return (
    <Layout>
      <section
        className='my-24'
        id='filmar-en-salta'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20 flex flex-col items-start gap-y-6'>
          <div className='flex gap-x-6 items-center'>
            <div className='text-4xl lg:text-4xl'>
              <span className='block font-secondary uppercase'>CÓMO RODAR</span>
              <span className='block font-secondary-black uppercase'>En Salta</span>
            </div>
            <div className='text-primary'>
              <Line />
            </div>
          </div>

          <p className='text-wrap max-w-3xl mb-3'>
            En SALTA SET ofrecemos asesoramiento a las productoras y los profesionales que quieren rodar en la Provincia
            de Salta. Aquí podrás encontrar información sobre permisos y condiciones de rodaje, de acuerdo al tipo de
            producción.
          </p>

          <span className='rounded-full text-sm px-6 py-2 uppercase font-bold bg-primary text-center inline-block'>
            CONDICIONES GENERALES
          </span>

          <p className='text-wrap mb-6'>
            La autorización para el rodaje en las locaciones de Salta Set requiere{' '}
            <strong>un plazo mínimo de 10 días hábiles</strong> para su tramitación. El uso de los espacios está{' '}
            <strong>sujeto a la disponibilidad</strong> de cada locación. Los interesados deben registrar la producción
            en el{' '}
            <a
              href='#'
              className='underline font-bold link-primary'
            >
              FORMULARIO
            </a>{' '}
            de Salta Set, explicando en detalle la propuesta y alcance del rodaje. (Link al registro dentro de la web)
            Para más información sobre locaciones específicas, consultá nuestro{' '}
            <a
              href='#'
              className='underline font-bold link-primary'
            >
              CATÁLOGO.
            </a>
          </p>

          <section className='w-full flex flex-col gap-y-6'>
            {data.map(data => (
              <FilmarItem
                key={data.id}
                data={data}
              />
            ))}
          </section>
        </section>
      </section>
      <HeadProvider>
        <Title>{menu[1][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
