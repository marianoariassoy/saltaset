import { menu } from '../data/data'
import { Link, useLocation } from 'wouter'
import { useDataContext } from '../context/useDataContext'
import DirectorioSubmenu from './DirectorioSubmenu'
import FilmarSubmenu from './FilmarSubmenu'

const Nav = () => {
  const [location] = useLocation()
  const { lan } = useDataContext()

  return (
    <nav className='hidden lg:flex gap-x-10 items-center'>
      {menu.map((data, index) => (
        <div
          key={index}
          className={`flex justify-center relative ${
            data.id === 4 ? 'show-submenu' : data.id === 2 ? 'show-submenu' : ''
          }`}
        >
          <Link href={data.url}>
            <a
              className={`underline-offset-4 decoration-2 ${
                location.slice(0, 8) === data.url.slice(0, 8) ? 'text-primary underline' : 'hover:underline'
              } `}
            >
              {data[lan].title}
            </a>
          </Link>
          {data.id === 4 && (
            <DirectorioSubmenu
              lan={lan}
              location={location}
              menu={menu}
            />
          )}
          {data.id === 2 && <FilmarSubmenu lan={lan} />}
        </div>
      ))}
    </nav>
  )
}

export default Nav
