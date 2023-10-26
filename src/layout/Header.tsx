import Languages from './Languages'
import { Link } from 'wouter'
import { Logo } from '../icons/icons'
import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'

const Header = () => {
  const { lan } = useDataContext()

  return (
    <section className='w-full max-w-7xl m-auto px-6 py-8 flex items-center justify-between'>
      <div>
        <Link href='/'>
          <a className='link-primary'>
            <Logo />
          </a>
        </Link>
      </div>
      <div>
        <nav>
          <ul className='flex gap-x-10 items-center'>
            {menu.map((data, index) => (
              <li key={index}>
                <a
                  href='#'
                  className='hover:opacity-40'
                >
                  {data[lan].title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <Languages />
      </div>
    </section>
  )
}

export default Header
