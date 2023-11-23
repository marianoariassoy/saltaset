import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import LocacionesItem from '../../components/LocacionesItem'

const Locaciones = ({ lan, category }) => {
  const { data, loading } = useFetch(`/locaciones/${category}/${lan}`)

  return (
    <section>
      {loading ? (
        <div className='px-6 lg:px-12 mb-12'>
          <BeatLoader />
        </div>
      ) : (
        <section className='row grid lg:grid-cols-3 gap-3 pb-12'>
          {data.map(item => (
            <LocacionesItem
              key={item.id}
              data={item}
            />
          ))}
        </section>
      )}
    </section>
  )
}

export default Locaciones
