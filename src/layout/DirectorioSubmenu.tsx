import { Link } from 'wouter'

const DirectorioSubmenu = ({ lan, location, menu }) => {
  return (
    <div className='absolute submenu hidden top-6'>
      <div className='mt-3 bg-secondary p-4 text-white text-center flex flex-col gap-y-3 text-sm font-bold'>
        <Link href='/directorio/empresas'>
          <a
            className={`border-b pb-3 border-primary hover:text-white ${
              location === '/directorio/empresas' ? 'text-primary' : 'text-white'
            }`}
          >
            {menu[3][lan].categories[0].title}
          </a>
        </Link>

        <Link href='/directorio/profesionales'>
          <a className={`hover:text-white ${location === '/directorio/profesionales' ? 'text-primary' : 'text-white'}`}>
            {menu[3][lan].categories[1].title}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default DirectorioSubmenu
