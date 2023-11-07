import Languages from './Languages'
import { Link } from 'wouter'
import { Logo } from '../icons/icons'

import { useEffect } from 'react'
import scroll from '../utils/scroll'
import Nav from './Nav'

const Header = () => {
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
        <Nav />
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
