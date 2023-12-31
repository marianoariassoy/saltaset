import { Link } from 'wouter'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

const DirectorioItem = ({ id, title, lan, type }) => {
  const { data, loading } = useFetch(`/directorios/subcategorias/${id}/${lan}`)

  return (
    <article className='mb-10'>
      <h2 className='font-bold'>{title}</h2>
      {loading ? (
        <div>
          <BeatLoader />
        </div>
      ) : (
        <div className='flex flex-col gap-x-2'>
          {data.map(item => (
            <Link
              key={item.id}
              to={`/directorio/${type}/listado/${item.id}`}
            >
              <a className='hover:opacity-50'>{item.title}</a>
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}

export default DirectorioItem
