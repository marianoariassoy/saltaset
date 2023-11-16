import { Line } from '../../icons/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import FilmarItem from './FilmarItem'

const Filmar = ({ lan }) => {
  const { data, loading } = useFetch(`/datossalta/${lan}`)

  const texts = {
    ES: {
      title: 'Filmar',
      title2: 'En Salta'
    },
    EN: {
      title: 'Filming',
      title2: 'In Salta'
    },
    FR: {
      title: 'Tournage',
      title2: 'à salta'
    }
  }

  return (
    <section
      className='bg-secondary text-white'
      id='filmar-en-salta'
    >
      <div className='w-full max-w-6xl m-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center'>
        <div className='col text-4xl lg:text-5xl'>
          <span className='text-primary font-secondary-black mb-4 flex items-center gap-x-4'>
            02 <Line />
          </span>
          <span className='block font-secondary uppercase'>{texts[lan].title}</span>
          <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
        </div>
        <div className='col lg:pl-12 flex flex-col gap-y-6'>
          {loading ? (
            <Loader />
          ) : (
            data.map(item => (
              <FilmarItem
                key={item.id}
                data={item}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Filmar
