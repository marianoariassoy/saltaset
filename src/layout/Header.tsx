import Languages from './Languages'
import { Link } from 'wouter'
import { Logo } from '../icons/icons'
import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'
import { useEffect } from 'react'
import scroll from '../utils/scroll'

const Header = () => {
  const { lan } = useDataContext()

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
                <a
                  href='#'
                  className='hover:underline underline-offset-4'
                >
                  {data[lan].title}
                </a>
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
