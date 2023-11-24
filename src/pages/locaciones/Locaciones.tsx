import { useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import LocacionesItem from '../../components/LocacionesItem'
import useFetch from '../../hooks/useFetch'
import Categorias from './Categorias'

const Locaciones = ({ lan, section }) => {
  const [category, setCategory] = useState(1)
  const { data, loading, setLoading } = useFetch(`/locaciones/${category}/${lan}`)

  if (loading)
    return (
      <div className='mt-8 px-6 lg:px-12'>
        <BeatLoader />
      </div>
    )

  return (
    <section>
      <Categorias
        lan={lan}
        section={section}
        category={category}
        setCategory={setCategory}
        setLoading={setLoading}
      />

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

export default Locaciones
