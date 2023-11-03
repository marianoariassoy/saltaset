import ImageComponent from '../../components/Image'

const NovedadesItem = ({ data }) => {
  return (
    <article className='grid lg:grid-cols-2'>
      <div className='lg:pr-12 aspect-video relative'>
        <div className='absolute w-full h-full cursor-pointer bg-primary-opacity  text-white text-6xl flex justify-center items-center z-20 opacity-0 hover:opacity-100 transition-all'>
          +
        </div>
        <ImageComponent
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='flex flex-col gap-y-3 py-3'>
        <div className='col flex flex-col gap-y-3'>
          <div className='lg:text-xl'>{data.date}</div>
          <div className='border-b border-t border-black py-3'>
            <h2 className='font-bold text-2xl'>{data.title}</h2>
          </div>
          <p className='text-wrap mb-4'>{data.text}</p>
        </div>
        <div>
          <a
            href='#'
            className='bg-secondary py-3 px-16 rounded-full font-bold inline-block button-secondary text-primary text-sm'
          >
            + VER MÁS
          </a>
        </div>
      </div>
    </article>
  )
}

export default NovedadesItem
