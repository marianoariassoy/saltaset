import { Link } from 'wouter'

const Submenu = ({ lan, menu, location, pos }) => {
  return (
    <div className='absolute submenu hidden top-6'>
      <div className='mt-3 bg-secondary p-4 text-white text-center flex flex-col gap-y-3 text-sm font-bold [&>a:last-child]:border-0 [&>a:last-child]:p-0'>
        {menu[pos][lan].categories.map((data, index) => (
          <Link
            href={data.url}
            key={index}
          >
            <a
              className={`border-b pb-3 border-primary link-primary ${
                location === data.url ? 'text-primary' : 'text-white'
              }`}
            >
              {data.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Submenu
