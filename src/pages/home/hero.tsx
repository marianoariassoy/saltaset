import Social from '../../layout/Social'
import { Down } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'

const Hero = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/home`)

  const goToSomos = () => {
    const target = '#somos-salta-set'
    const targetElement = document.querySelector(`${target}`) as HTMLElement
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    })
  }

  const texts = {
    ES: {
      hero_title: 'Desliza'
    },
    EN: {
      hero_title: 'Swipe'
    },
    FR: {
      hero_title: 'Glisser'
    }
  }

  return (
    <section
      className='h-[80vh] lg:h-[90vh] relative'
      id='hero'
    >
      <div>{!loading && <Slider data={data} />}</div>

      <div
        className='absolute bottom-0 left-0 z-20 text-primary pl-6'
        id='hero-social'
      >
        <div className='absolute bottom-[10px]'>
          <Social hover='hover:text-white' />
        </div>
      </div>
      <button
        className='absolute bottom-12 right-6 z-20 cursor-pointer flex items-center gap-2 text-primary font-secondary text-sm text-vertical uppercase hover:text-black'
        onClick={goToSomos}
      >
        {texts[lan].hero_title} <Down />
      </button>
    </section>
  )
}

export default Hero
