import { Plus } from '../../icons/icons'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Back, Forward } from '../../icons/icons'
import PorqueItem from './PorqueItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Porque = ({ lan }) => {
  const { data: data, loading: loading } = useFetch(`/porquesalta/${lan}`)

  const texts = {
    ES: {
      title: 'Por qué',
      title2: 'Salta'
    },
    EN: {
      title: 'Why',
      title2: 'Salta'
    },
    FR: {
      title: 'Pourquoi',
      title2: 'Salta'
    }
  }

  const sliderProperties = {
    autoplay: false,
    transitionDuration: 250,
    indicators: false,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: (
      <div className='hover:text-white bg-primary h-full grid content-center lg:-ml-4'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-white bg-primary h-full grid content-center lg:-mr-4'>
        <Forward />
      </div>
    )
  }

  return (
    <section
      className='bg-primary'
      id='porque-salta'
    >
      <div className='w-full max-w-6xl m-auto px-6 pb-12 pt-12 gap-6 items-center lg:flex'>
        <div className='col text-4xl relative lg:w-1/4 reveal-on-scroll'>
          <div className='absolute -left-20 mt-4'>
            <Plus />
          </div>
          <span className='block font-secondary uppercase'>{texts[lan].title}</span>
          <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
        </div>
        <div className='col lg:w-3/4 reveal-on-scroll'>
          {loading ? (
            <Loader />
          ) : (
            <Slide {...sliderProperties}>
              {data?.map(item => (
                <PorqueItem
                  key={item.id}
                  data={item}
                />
              ))}
            </Slide>
          )}
        </div>
      </div>
    </section>
  )
}

export default Porque
