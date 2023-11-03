import { useEffect } from 'react'
import { Link } from 'wouter'
import Layout from '../../layout/Layout'
import { Line, Right } from '../../icons/icons'
import DirectorioItem from './DirectorioItem'
import { menu } from '../../data/data'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const texts = {
    ES: {
      title: 'Registrate'
    },
    EN: {
      title: 'Register'
    },
    FR: {
      title: 'Enregistrez'
    }
  }

  const data = [
    {
      'Asociaciones y Organismos oficiales': [
        { title: 'Asociaciones', id: 1 },
        { title: 'Organismos', id: 2 }
      ]
    },
    {
      Comunicación: [
        { title: 'Agencias de Product Placement ', id: 3 },
        { title: 'Agencias de comunicación', id: 4 },
        { title: 'Agencias de márqueting', id: 4 },
        { title: 'Control de difusión y audiencia', id: 4 },
        { title: 'Centrales compra de medios', id: 4 },
        { title: 'Grupos de comunicación', id: 4 },
        { title: 'Videoconferencias', id: 4 }
      ]
    },
    {
      Distribución: [
        { title: 'Distribuidores: cine', id: 5 },
        { title: 'Distribuidores: multimedia', id: 6 },
        { title: 'Distribuidores: vídeo', id: 6 },
        { title: 'Importación - exportación película', id: 6 }
      ]
    },
    {
      'Asociaciones y Organismos oficiales': [
        { title: 'Asociaciones', id: 1 },
        { title: 'Organismos', id: 2 }
      ]
    },
    {
      Comunicación: [
        { title: 'Agencias de Product Placement ', id: 3 },
        { title: 'Agencias de comunicación', id: 4 },
        { title: 'Agencias de márqueting', id: 4 },
        { title: 'Control de difusión y audiencia', id: 4 },
        { title: 'Centrales compra de medios', id: 4 },
        { title: 'Grupos de comunicación', id: 4 },
        { title: 'Videoconferencias', id: 4 }
      ]
    },
    {
      Distribución: [
        { title: 'Distribuidores: cine', id: 5 },
        { title: 'Distribuidores: multimedia', id: 6 },
        { title: 'Distribuidores: vídeo', id: 6 },
        { title: 'Importación - exportación película', id: 6 }
      ]
    },
    {
      'Asociaciones y Organismos oficiales': [
        { title: 'Asociaciones', id: 1 },
        { title: 'Organismos', id: 2 }
      ]
    },
    {
      Comunicación: [
        { title: 'Agencias de Product Placement ', id: 3 },
        { title: 'Agencias de comunicación', id: 4 },
        { title: 'Agencias de márqueting', id: 4 },
        { title: 'Control de difusión y audiencia', id: 4 },
        { title: 'Centrales compra de medios', id: 4 },
        { title: 'Grupos de comunicación', id: 4 },
        { title: 'Videoconferencias', id: 4 }
      ]
    },
    {
      Distribución: [
        { title: 'Distribuidores: cine', id: 5 },
        { title: 'Distribuidores: multimedia', id: 6 },
        { title: 'Distribuidores: vídeo', id: 6 },
        { title: 'Importación - exportación película', id: 6 }
      ]
    },
    {
      'Asociaciones y Organismos oficiales': [
        { title: 'Asociaciones', id: 1 },
        { title: 'Organismos', id: 2 }
      ]
    },
    {
      Comunicación: [
        { title: 'Agencias de Product Placement ', id: 3 },
        { title: 'Agencias de comunicación', id: 4 },
        { title: 'Agencias de márqueting', id: 4 },
        { title: 'Control de difusión y audiencia', id: 4 },
        { title: 'Centrales compra de medios', id: 4 },
        { title: 'Grupos de comunicación', id: 4 },
        { title: 'Videoconferencias', id: 4 }
      ]
    },
    {
      Distribución: [
        { title: 'Distribuidores: cine', id: 5 },
        { title: 'Distribuidores: multimedia', id: 6 },
        { title: 'Distribuidores: vídeo', id: 6 },
        { title: 'Importación - exportación película', id: 6 }
      ]
    },
    {
      'Asociaciones y Organismos oficiales': [
        { title: 'Asociaciones', id: 1 },
        { title: 'Organismos', id: 2 }
      ]
    },
    {
      Comunicación: [
        { title: 'Agencias de Product Placement ', id: 3 },
        { title: 'Agencias de comunicación', id: 4 },
        { title: 'Agencias de márqueting', id: 4 },
        { title: 'Control de difusión y audiencia', id: 4 },
        { title: 'Centrales compra de medios', id: 4 },
        { title: 'Grupos de comunicación', id: 4 },
        { title: 'Videoconferencias', id: 4 }
      ]
    },
    {
      Distribución: [
        { title: 'Distribuidores: cine', id: 5 },
        { title: 'Distribuidores: multimedia', id: 6 },
        { title: 'Distribuidores: vídeo', id: 6 },
        { title: 'Importación - exportación película', id: 6 }
      ]
    },
    {
      'Asociaciones y Organismos oficiales': [
        { title: 'Asociaciones', id: 1 },
        { title: 'Organismos', id: 2 }
      ]
    },
    {
      Comunicación: [
        { title: 'Agencias de Product Placement ', id: 3 },
        { title: 'Agencias de comunicación', id: 4 },
        { title: 'Agencias de márqueting', id: 4 },
        { title: 'Control de difusión y audiencia', id: 4 },
        { title: 'Centrales compra de medios', id: 4 },
        { title: 'Grupos de comunicación', id: 4 },
        { title: 'Videoconferencias', id: 4 }
      ]
    },
    {
      Distribución: [
        { title: 'Distribuidores: cine', id: 5 },
        { title: 'Distribuidores: multimedia', id: 6 },
        { title: 'Distribuidores: vídeo', id: 6 },
        { title: 'Importación - exportación película', id: 6 }
      ]
    },
    {
      'Asociaciones y Organismos oficiales': [
        { title: 'Asociaciones', id: 1 },
        { title: 'Organismos', id: 2 }
      ]
    },
    {
      Comunicación: [
        { title: 'Agencias de Product Placement ', id: 3 },
        { title: 'Agencias de comunicación', id: 4 },
        { title: 'Agencias de márqueting', id: 4 },
        { title: 'Control de difusión y audiencia', id: 4 },
        { title: 'Centrales compra de medios', id: 4 },
        { title: 'Grupos de comunicación', id: 4 },
        { title: 'Videoconferencias', id: 4 }
      ]
    },
    {
      Distribución: [
        { title: 'Distribuidores: cine', id: 5 },
        { title: 'Distribuidores: multimedia', id: 6 },
        { title: 'Distribuidores: vídeo', id: 6 },
        { title: 'Importación - exportación película', id: 6 }
      ]
    }
  ]

  return (
    <Layout>
      <section
        className='my-24'
        id='locaciones'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20 pb-12'>
          <div className='row flex flex-col items-start gap-3 lg:flex-row lg:justify-between lg:items-center mb-20'>
            <div className='col flex items-center gap-x-4'>
              <h1 className='text-3xl lg:text-4xl font-secondary-black uppercase'>
                {menu[3][lan].categories[1].title}
              </h1>
              <span className='text-primary'>
                <Line />
              </span>
            </div>
            <div>
              <Link href='/directorio/profesionales/formulario'>
                <a className='rounded-full px-6 py-2 uppercase font-bold bg-primary text-sm text-center button-black-hover flex justify-between items-center gap-x-2'>
                  <span>{texts[lan].title}</span>
                  <Right />
                </a>
              </Link>
            </div>
          </div>
          <section className='columns-2 lg:columns-3 col-span-6 justify-between items-start'>
            {data.map((data, index) => (
              <DirectorioItem
                key={index}
                data={data}
              />
            ))}
          </section>
        </section>
      </section>
    </Layout>
  )
}

export default Index
