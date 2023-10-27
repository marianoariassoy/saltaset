import { Plus } from '../../icons/icons'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Back, Forward } from '../../icons/icons'
import PorqueItem from './PorqueItem'

const Porque = () => {
  const data = [
    {
      id: 1,
      title: 'Ubicación estratégica',
      image: '/images/home-1.webp'
    },
    {
      id: 2,
      title: 'Ubicación estratégica',
      image: '/images/home-1.webp'
    },
    {
      id: 3,
      title: 'Ubicación estratégica',
      image: '/images/home-1.webp'
    },
    {
      id: 4,
      title: 'Ubicación estratégica',
      image: '/images/home-1.webp'
    },
    {
      id: 5,
      title: 'Ubicación estratégica',
      image: '/images/home-1.webp'
    }
  ]

  const properties = {
    autoplay: false,
    transitionDuration: 250,
    indicators: false,
    arrows: true,
    infinite: true,

    prevArrow: (
      <div className='hover:text-white  bg-primary h-full grid content-center lg:-ml-3'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-white bg-primary h-full grid content-center lg:-mr-3'>
        <Forward />
      </div>
    )
  }

  const responsiveSettings = [
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
  ]

  return (
    <section
      className='bg-primary'
      id='porque-salta'
    >
      <div className='w-full max-w-6xl m-auto px-6 pb-12 pt-12 gap-6 items-center lg:flex'>
        <div className='col text-4xl relative lg:w-1/4'>
          <div className='absolute -left-20 mt-4'>
            <Plus />
          </div>
          <span className='block font-secondary'>POR QUÉ </span>
          <span className='block font-secondary-black'>SALTA</span>
        </div>
        <div className='col lg:w-3/4'>
          <Slide
            {...properties}
            responsive={responsiveSettings}
          >
            {data?.map(data => (
              <PorqueItem
                key={data.id}
                data={data}
              />
            ))}
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default Porque
