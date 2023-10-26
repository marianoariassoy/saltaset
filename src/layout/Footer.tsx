import { Link } from 'wouter'
import { Logo } from '../icons/icons'
import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'
import Social from './Social'

const Footer = () => {
  const { lan } = useDataContext()

  return (
    <div className='w-full max-w-7xl m-auto px-6 py-12 text-white'>
      <div className='w-full flex items-center justify-between gap-8 mb-6'>
        <nav>
          <ul className='flex flex-col'>
            {menu.map((data, index) => (
              <li key={index}>
                <Link href={data.url}>
                  <a className='link-primary'>{data[lan].title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Logo />
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <div className='flex-grow basis-0'>
          <Social />
        </div>
        <div className='text-center'>
          Juramento 180 - Usina Cultural - A4400DMN, Salta. - Tel. + 54 387 4212296 -{' '}
          <a
            href='mailto:saltaset@edusalta.gov.ar'
            className='text-primary hover:underline'
          >
            saltaset@edusalta.gov.ar
          </a>
        </div>
        <div className='flex-grow basis-0'></div>
      </div>
    </div>
  )
}

export default Footer
