import { Triangle } from '../icons/icons'
import ImageComponent from './Image'

const LocacionesItem = ({ title, image }) => {
  return (
    <article className='aspect-[5/4] relative'>
      <div className='absolute w-full h-full cursor-pointer article-locaciones'>
        <div className='absolute bottom-8 p-6 bg-white/30 backdrop-blur font-bold w-3/4 flex items-center justify-between article-layer transition-all'>
          <div className='uppercase text-sm'>{title}</div>
          <div>
            <Triangle />
          </div>
        </div>
      </div>
      <ImageComponent
        src={image}
        alt={title}
      />
    </article>
  )
}

export default LocacionesItem
