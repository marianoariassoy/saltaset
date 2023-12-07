import { Link } from 'wouter'

const Submenu = ({ lan, menu, location, pos }) => {
  return (
    <div className='absolute submenu hidden top-6 uppercase text-sm'>
      <div className='bg-primary mt-3 p-4 text-center flex flex-col gap-y-3 text-sm font-bold [&>a:last-child]:border-0 [&>a:last-child]:p-0'>
        {menu[pos][lan].categories.map((data, index) => (
          <Link
            href={data.url}
            key={index}
          >
            <a
              className={`border-b pb-3 border-black text-secondary ${
                location === data.url ? 'opacity-60' : 'hover:opacity-60'
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
