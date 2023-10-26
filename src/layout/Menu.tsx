import { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { menu } from '../data/data'
import Languages from './Languages'
import Social from './Social'
import { useDataContext } from '../context/useDataContext'

const Menu = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()
  const [isHome, setIsHome] = useState(true)

  const closeMenu = () => {
    document.querySelector('header')?.classList.toggle('text-white')
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  useEffect(() => {
    location === '/historia' ||
    location === '/ruta-del-vino' ||
    location === '/beneficios-y-promociones' ||
    location === '/vivi-molinos'
      ? setIsHome(false)
      : setIsHome(true)
  }, [location])

  return (
    <section className='h-full w-full text-center grid content-center'>
      <div className='flex flex-col gap-y-12 font-secondary-semibold'>
        <nav
          onClick={closeMenu}
          className='mt-12'
        >
          <ul className='flex flex-col text-3xl'>
            {menu.map((item, index) => (
              <li key={index}>
                {isHome && item.path ? (
                  <a
                    href='#'
                    className='scroll hover-underline-animation'
                    target={item.path.toLocaleLowerCase()}
                  >
                    {lan === 'ES' && item.title}
                    {lan === 'EN' && item.title_en}
                    {lan === 'FR' && item.title_fr}
                    {lan === 'POR' && item.title_por}
                  </a>
                ) : (
                  <Link href={item.url}>
                    <a className={`${item.url === location ? 'selected' : 'hover-underline-animation'}`}>
                      {lan === 'ES' && item.title}
                      {lan === 'EN' && item.title_en}
                      {lan === 'FR' && item.title_fr}
                      {lan === 'POR' && item.title_por}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex gap-x-6 items-center justify-center'>
          <Languages />
          <Social />
        </div>
      </div>
    </section>
  )
}

export default Menu
