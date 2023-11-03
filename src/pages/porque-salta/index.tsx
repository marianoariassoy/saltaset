import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import ImageComponent from '../../components/Image'
import { Line, Pin, Center, Plane, Star, UserCheck, Sun, Money } from '../../icons/icons'
import PorqueItem from './PorqueItem'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = [
    {
      id: 1,
      icon: <Pin />,
      ES: {
        title: 'UBICACIÓN ESTRATÉGICA',
        text: 'La provincia de Salta limita con tres países: Chile, Bolivia y Paraguay. Con todos tiene conexión a través de rutas terrestres transitables con cualquier vehículo.'
      },
      EN: {
        title: 'UBICACIÓN ESTRATÉGICA',
        text: ''
      },
      FR: {
        title: 'UBICACIÓN ESTRATÉGICA',
        text: ' '
      }
    },
    {
      id: 2,
      icon: <Center />,
      ES: {
        title: 'CENTRO DE LA REGIÓN',
        text: 'Se encuentra a 1616 km de la Ciudad de Buenos Aires (capital de la República Argentina) y limita con seis provincias argentinas: Jujuy, Formosa, Chaco, Tucumán, Santiago del Estero y Catamarca. Por su ubicación, conectividad aérea y terrestre y la diversidad de sus servicios, Salta es un centro estratégico en el Norte Argentino.'
      },
      EN: {
        title: 'CENTRO DE LA REGIÓN',
        text: ' '
      },
      FR: {
        title: 'CENTRO DE LA REGIÓN',
        text: ' '
      }
    },
    {
      id: 3,
      icon: <Plane />,
      ES: {
        title: 'CONECTIVIDAD AÉREA',
        text: 'El Aeropuerto Internacional Martín Miguel de Güemes está ubicado a 9 kms del centro de la ciudad de Salta.  Es la puerta de entrada más importante del noroeste argentino. Tenemos conectividad con todas las regiones del país, Brasil y Perú: Buenos Aires, Rosario, Córdoba,Mendoza, San Miguel de Tucumán, Resistencia, Iguazú, Neuquén, Bariloche, San Pablo, Lima'
      },
      EN: {
        title: 'CONECTIVIDAD AÉREA',
        text: ' '
      },
      FR: {
        title: 'CONECTIVIDAD AÉREA',
        text: ' '
      }
    },
    {
      id: 4,
      icon: <Star />,
      ES: {
        title: 'SERVICIOS DE CALIDAD',
        text: 'Salta es reconocida en todo el país por su modelo de gestión turística y de servicios.  Décadas de experiencia e inversión en el sector representan hoy una ventaja para  el funcionamiento de rodajes en la provincia.  El trabajo articulado entre el sector público y el privado, garantiza la  variedad y calidad de servicios de alojamiento, transporte y  gastronomía, entre otros.'
      },
      EN: {
        title: 'SERVICIOS DE CALIDAD',
        text: ' '
      },
      FR: {
        title: 'SERVICIOS DE CALIDAD',
        text: ' '
      }
    },
    {
      id: 5,
      icon: <UserCheck />,
      ES: {
        title: 'PERSONAL CALIFICADO',
        text: 'Además de la excelencia en servicios,  Salta es cuna de realizadores  destacados. Contamos con profesionales capacitados en todos los rubros vinculados al audiovisual.  '
      },
      EN: {
        title: 'PERSONAL CALIFICADO',
        text: ' '
      },
      FR: {
        title: 'PERSONAL CALIFICADO',
        text: ' '
      }
    },
    {
      id: 6,
      icon: <Sun />,
      ES: {
        title: 'CLIMA PRIVILEGIADO',
        text: 'En la zona tropical posee clima cálido, aunque con variaciones bastante marcadas en las distintas regiones, en función de su relieve. En el Este predomina el clima semiárido con  estación seca. El Altiplano se caracteriza por bruscas oscilaciones térmicas y escasas precipitaciones. En tanto, valles, quebradas y sierras cuentan con un clima agradable la mayor parte del año.'
      },
      EN: {
        title: 'CLIMA PRIVILEGIADO',
        text: ' '
      },
      FR: {
        title: 'CLIMA PRIVILEGIADO',
        text: ' '
      }
    },
    {
      id: 7,
      icon: <Money />,
      ES: {
        title: 'INCENTIVOS A LAS PRODUCCIONES',
        text: 'El crecimiento de la industria audiovisual en la región no solo genera beneficios en el sector específico sino que provoca un importante efecto derrame en otros sectores, así como significativos incrementos en la contratación de mano de obra local calificada. Desde Salta Set asumimos el compromiso de apoyar económicamente el desarrollo de la actividad  audiovisual, generando reembolsos de gastos a quienes contraten servicios en la Provincia.'
      },
      EN: {
        title: 'INCENTIVOS A LAS PRODUCCIONES',
        text: ' '
      },
      FR: {
        title: 'INCENTIVOS A LAS PRODUCCIONES',
        text: ' '
      }
    }
  ]

  return (
    <Layout>
      <section
        className='my-24'
        id='porque-salta'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20 mb-12 flex gap-x-6 items-center'>
          <div className='text-4xl lg:text-4xl'>
            <span className='block font-secondary uppercase'>POR QUÉ</span>
            <span className='block font-secondary-black uppercase'>SALTA</span>
          </div>
          <div className='text-primary'>
            <Line />
          </div>
        </section>

        <section className='row aspect-video lg:aspect-[6/2]'>
          <ImageComponent
            src='/images/porque-salta.jpg'
            alt='Porque Salta'
          />
        </section>

        <section className='row px-6 pt-20 flex flex-col gap-y-6 [&>article:last-child]:border-0'>
          {data.map(item => (
            <PorqueItem
              key={item.id}
              title={item[lan].title}
              text={item[lan].text}
              icon={item.icon}
            />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Index
