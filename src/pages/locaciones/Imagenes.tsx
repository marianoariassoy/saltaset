import ImageComponent from '../../components/Image'

const Imagenes = ({ data, setCurrentVideo }) => {
  return (
    <div className='aspect-square relative'>
      <div
        className='absolute w-full h-full cursor-pointer bg-primary-opacity text-white text-4xl flex justify-center items-center z-20 opacity-0 hover:opacity-100 transition-all'
        onClick={() => setCurrentVideo(data.image)}
      >
        +
      </div>
      <ImageComponent
        src={data.image}
        alt='Image'
      />
    </div>
  )
}

export default Imagenes
