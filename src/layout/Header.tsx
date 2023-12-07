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
    <div className='header px-6 lg:px-12 py-8 flex items-center justify-between text-white'>
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
      <div className='flex items-end flex-col gap-y-6'>
        <div
          className='nav-menu lg:hidden'
          onClick={OpenMenu}
        >
          <span></span>
          <span></span>
        </div>
        <Languages />
      </div>
    </div>
  )
}

export default Header
