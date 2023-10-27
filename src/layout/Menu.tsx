import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'

const Menu = () => {
  const { lan } = useDataContext()

  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='menu-mobile fixed top-0 fade-in h-screen w-full bg-primary -z-10 hidden'>
      <div className='grid content-center w-full h-full text-center'>
        <nav
          onClick={closeMenu}
          className=''
        >
          <ul className='flex flex-col text-3xl font-bold gap-y-2'>
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
    </section>
  )
}

export default Menu
