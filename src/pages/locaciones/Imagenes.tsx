import ImageComponent from '../../components/Image'

const Imagenes = ({ data, setCurrentVideo }) => {
  return (
    <article
      className='aspect-square w-full h-full relative'
      onClick={() => setCurrentVideo(data.image)}
    >
      <div className='absolute w-full h-full cursor-pointer text-white text-4xl flex justify-center items-center opacity-0 hover:opacity-100 article-locaciones z-20'>
        +
      </div>
      <ImageComponent
        src={data.image}
        alt='Image'
      />
    </article>
  )
}

export default Imagenes
