import ImageComponent from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import PorqueItem from '../porque-salta/PorqueItem'

const RutasTuristicas = ({ lan }) => {
  const { data, loading } = useFetch(`/rutasturisticas/${lan}`)

  return (
    <section className='mb-24 mt-12'>
      <div className='row w-full aspect-video h-[50vh]'>
        <ImageComponent
          src='http://marianoarias.soy/sites/saltaset-backend/images-statics/rutas-turisticas.webp'
          alt='Imagen de rutas turisticas'
        />
      </div>
      <div className='row px-6 pt-20 flex flex-col gap-y-6 [&>article:last-child]:border-0'>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          data.map(item => (
            <PorqueItem
              key={item.id}
              data={item}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default RutasTuristicas
