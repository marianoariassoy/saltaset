import ImageComponent from '../../components/Image'
import { Triangle } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'

const FilmografiaItem = ({ data }) => {
  const { lan } = useDataContext()

  const texts = {
    ES: {
      year: 'Año',
      director: 'Director'
    },
    EN: {
      year: 'Year',
      director: 'Director'
    },
    FR: {
      year: 'Año',
      director: 'Directeur'
    }
  }
  return (
    <article className='relative'>
      <div className='aspect-[4/6] mb-3'>
        <ImageComponent
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='flex items-center gap-3'>
        <div className='text-primary text-2xl'>
          <Triangle />
        </div>
        <div className='text-sm'>
          <h3 className='font-bold'>{data.title}</h3>
          <p>
            <strong>{texts[lan].year}:</strong> {data.year}
          </p>
          <p>
            <strong>{texts[lan].director}:</strong> {data.director}
          </p>
        </div>
      </div>
    </article>
  )
}

export default FilmografiaItem
