import Languages from './Languages'
import { Link, useLocation } from 'wouter'
import { Logo } from '../icons/icons'
import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'
import { useEffect } from 'react'
import scroll from '../utils/scroll'

const Header = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()

  useEffect(() => {
    scroll()
  }, [])

  const OpenMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='header w-full max-w-6xl m-auto px-6 py-8 flex items-center justify-between z-30'>
      <div>
        <Link href='/'>
          <a className='link-primary logo-header'>
            <Logo />
          </a>
        </Link>
      </div>
      <div>
        <nav className='hidden lg:block'>
          <ul className='flex gap-x-6 items-center'>
            {menu.map((data, index) => (
              <li key={index}>
                <Link href={data.url}>
                  <a
                    className={`underline-offset-4 decoration-2 ${
                      location.slice(0, 8) === data.url.slice(0, 8) ? 'text-primary underline' : 'hover:underline'
                    } ${data.id === 4 && 'handle-submenu'}`}
                  >
                    {data[lan].title}
                  </a>
                </Link>
                {data.id === 4 && (
                  <div className='absolute mt-3 bg-secondary p-3 w-96 -ml-40 submenu-directorio hidden'>
                    <div className='w-full text-white text-center flex flex-col gap-y-2 text-sm uppercase font-bold'>
                      <Link href='/directorio/empresas'>
                        <a className={`${location === '/directorio/empresas' ? 'text-primary' : 'link-primary'}`}>
                          {menu[3][lan].categories[0].title}
                        </a>
                      </Link>
                      <hr className='w-full border-primary' />
                      <Link href='/directorio/profesionales'>
                        <a className={`${location === '/directorio/profesionales' ? 'text-primary' : 'link-primary'}`}>
                          {menu[3][lan].categories[1].title}
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='flex items-end flex-col gap-y-2'>
        <div
          className='nav-menu lg:hidden'
          onClick={OpenMenu}
        >
          <span></span>
          <span></span>
        </div>
        <Languages />
      </div>
    </section>
  )
}

export default Header
