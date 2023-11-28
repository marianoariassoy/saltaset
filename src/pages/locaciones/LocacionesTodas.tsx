import BeatLoader from 'react-spinners/BeatLoader'
import LocacionesItem from '../../components/LocacionesItem'
import useFetch from '../../hooks/useFetch'

const LocacionesTodas = ({ lan }) => {
  const { data, loading } = useFetch(`/locaciones-todas/${lan}`)

  if (loading)
    return (
      <div className='mt-8 px-6 lg:px-12'>
        <BeatLoader />
      </div>
    )

  return (
    <section className='mt-12'>
      <div className='row grid lg:grid-cols-3 gap-3 pb-12'>
        {data.map(item => (
          <LocacionesItem
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </section>
  )
}

export default LocacionesTodas
