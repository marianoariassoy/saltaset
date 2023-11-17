import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

const DirectorioItem = ({ id, title, lan, type }) => {
  const { data, loading } = useFetch(`/directorios/subcategorias/${id}/${lan}`)

  console.log(type)
  return (
    <article className='mb-6'>
      <h2 className='font-bold'>{title}</h2>

      {loading ? (
        <div>
          <BeatLoader />
        </div>
      ) : (
        <div className='flex flex-col gap-x-2'>
          {data.map(item => (
            <a
              href='#'
              className='link-primary'
              key={item.id}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default DirectorioItem
