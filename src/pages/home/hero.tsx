import Social from '../../layout/Social'
import { Down } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'
import { texts } from '../../data/data'
import ImageComponent from '../../components/Image'

const Hero = () => {
  const { lan } = useDataContext()

  return (
    <section
      className='h-[80vh] lg:h-[90vh] relative'
      id='hero'
    >
      <ImageComponent
        src='/images/home-1.webp'
        alt='Hombre con una camara'
      />

      <div
        className='absolute bottom-0 left-0 z-20 text-primary pl-6'
        id='hero-social'
      >
        <div className='absolute bottom-3'>
          <Social hover='hover:text-white' />
        </div>
      </div>
      <div className='absolute bottom-6 right-6 z-20 flex items-center gap-2 text-primary font-secondary text-sm text-vertical'>
        {texts[lan].hero_title} <Down />
      </div>
    </section>
  )
}

export default Hero
