import { Link, useLocation } from 'wouter'
import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import { menu } from '../../data/data'
import { Line } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'
import Categorias from './Categorias'

const Index = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()
  let texts

  if (location === '/directorio/empresas') {
    texts = {
      title: menu[3][lan].categories[0].title,
      type: 'empresas',
      ES: {
        link: 'Inscribí tu empresa',
        link2: 'Profesionales'
      },
      EN: {
        link: 'Register your company',
        link2: 'Professionals'
      },
      FR: {
        link: 'Enregistrez votre entreprise',
        link2: 'Professionnels'
      }
    }
  } else {
    texts = {
      title: menu[3][lan].categories[1].title,
      type: 'profesionales',
      ES: {
        link: 'Registrate',
        link2: 'Empresas'
      },
      EN: {
        link: 'Register',
        link2: 'Companies'
      },
      FR: {
        link: 'Enregistrez',
        link2: 'Entreprises'
      }
    }
  }

  return (
    <Layout>
      <section className='my-12 lg:my-24 row w-full px-6 lg:px-12'>
        <section className='flex flex-col items-start gap-3 lg:flex-row lg:justify-between lg:items-center mb-12'>
          <div className='col flex items-center gap-x-4'>
            <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{texts.title}</h1>
            <span className='text-primary'>
              <Line />
            </span>
          </div>
          <div className='flex gap-x-3'>
            <Link href={`/directorio/${texts.type}/formulario`}>
              <a className='rounded-full px-6 py-3 uppercase font-bold bg-primary text-sm button-black-hover'>
                {texts[lan].link}
              </a>
            </Link>
            <Link href={`${texts.type === 'empresas' ? '/directorio/profesionales' : '/directorio/empresas'}`}>
              <a className='rounded-full px-6 py-3 uppercase font-bold bg-primary text-sm button-black-hover'>
                {texts[lan].link2}
              </a>
            </Link>
          </div>
        </section>

        <Categorias
          lan={lan}
          section={texts.type}
        />
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[3][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
