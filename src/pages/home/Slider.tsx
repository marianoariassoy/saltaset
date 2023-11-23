import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Loader from '../../components/Loader'

const SliderItem = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <Loader />
  ) : (
    <img
      src={src}
      className='fade-in w-full object-cover object-center h-[80vh] lg:h-[90vh]'
    />
  )
}

const Slider = ({ data }) => {
  const properties = {
    autoplay: true,
    transitionDuration: 400,
    autoplayInterval: 5000,
    indicators: true,
    arrows: false,
    infinite: true
  }

  return (
    <Slide {...properties}>
      {data &&
        data.map(image =>
          image.image ? (
            <SliderItem
              key={image.id}
              src={image.image}
            />
          ) : (
            <video
              src={image.video}
              className='h-[80vh] lg:h-[90vh] w-full object-cover object-center'
              autoPlay
              muted
              loop
            ></video>
          )
        )}
    </Slide>
  )
}

export default Slider
