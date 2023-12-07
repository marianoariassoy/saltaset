import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'
import { Link, useLocation } from 'wouter'

const Menu = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()

  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='menu-mobile fixed top-0 fade-in h-screen w-full bg-secondary -z-10 hidden'>
      <div className='grid content-center w-full h-full text-center text-white'>
        <nav
          onClick={closeMenu}
          className=''
        >
          <ul className='flex flex-col text-3xl font-bold gap-y-2'>
            {menu.map(data => (
              <li
                key={data.id}
                className='flex flex-col gap-y-2'
              >
                <Link href={data.url}>
                  <a className={`underline-offset-4 ${location === data.url ? 'underline' : ''}`}>{data[lan].title}</a>
                </Link>
                {data.id === 4 &&
                  data[lan].categories.map(category => (
                    <Link
                      href={category.url}
                      key={category.id}
                    >
                      <a className={`underline-offset-4 ${location === category.url ? 'underline' : ''}`}>
                        {category.title}
                      </a>
                    </Link>
                  ))}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Menu
