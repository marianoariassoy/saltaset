import { Link } from 'wouter'
import useFetch from '../hooks/useFetch'

const FilmarSubmenu = ({ lan }) => {
  const { data, loading } = useFetch(`/filmarensalta/${lan}`)

  return (
    <div className='absolute submenu hidden top-6'>
      <div className='mt-3 w-full bg-secondary p-4 text-white text-center flex flex-col gap-y-3 text-sm  font-bold [&>a:last-child]:border-0 [&>a:last-child]:pb-0'>
        {!loading &&
          data.map(item => (
            <Link
              key={item.id}
              href={`/filmar-en-salta#${item.id}`}
            >
              <a className='border-primary text-primary border-b pb-3 hover:text-white'>{item.title}</a>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default FilmarSubmenu
