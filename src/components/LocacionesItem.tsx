import { Triangle } from '../icons/icons'

const LocacionesItem = ({ title, image }) => {
  return (
    <article className='aspect-[5/4] relative'>
      <div className='absolute w-full h-full cursor-pointer article-locaciones'>
        <div className='absolute bottom-8 p-4 bg-white/80 font-bold w-3/4 h-20 flex items-center justify-between article-layer transition-all'>
          <div className='uppercase'>{title}</div>
          <div className='text-xl'>
            <Triangle />
          </div>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className='w-full h-full object-cover object-center'
      />
    </article>
  )
}

export default LocacionesItem
