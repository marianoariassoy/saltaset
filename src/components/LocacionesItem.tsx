import { Link } from 'wouter'
import ImageComponent from './Image'
import { Triangle } from '../icons/icons'
import { sanitizeTitleForURL } from '../utils/utils'

const LocacionesItem = ({ data }) => {
  return (
    <article className='aspect-[5/4] relative'>
      <Link to={`/locaciones/${data.id}/${sanitizeTitleForURL(data.title)}`}>
        <div className='absolute w-full h-full cursor-pointer article-locaciones'>
          <div className='absolute bottom-8 p-6 bg-white/30 backdrop-blur font-bold w-3/4 flex items-center justify-between gap-x-3 article-layer transition-all'>
            <div className='uppercase text-sm text-wrap'>{data.title}</div>
            <Triangle />
          </div>
        </div>
      </Link>
      <ImageComponent
        src={data.image}
        alt={data.title}
      />
    </article>
  )
}

export default LocacionesItem
