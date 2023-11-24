import { useEffect } from 'react'
import Masonry from 'react-masonry-css'
import BeatLoader from 'react-spinners/BeatLoader'
import useFetch from '../../hooks/useFetch'
import CategoriasItem from './CategoriaItem'

const Categorias = ({ lan, section }) => {
  const { data, loading, setLoading } = useFetch(`/directorios/categorias/${section}/${lan}`)

  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    700: 2,
    500: 1
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
  }, [setLoading])

  return (
    <section>
      {loading ? (
        <div>
          <BeatLoader />
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {data.map(item => (
            <CategoriasItem
              key={item.id}
              title={item.title}
              id={item.id}
              lan={lan}
              type={section}
            />
          ))}
        </Masonry>
      )}
    </section>
  )
}

export default Categorias
