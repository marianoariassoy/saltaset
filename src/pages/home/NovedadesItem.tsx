import ImageComponent from '../../components/Image'
import { Link } from 'wouter'
import { sanitizeTitleForURL } from '../../utils/utils'

const NovedadesItem = ({ data, lan }) => {
  const texts = {
    ES: {
      link: 'Ver más'
    },
    EN: {
      link: 'View more'
    },
    FR: {
      link: 'Voir plus'
    }
  }

  return (
    <article className='grid lg:grid-cols-2 reveal-on-scroll-opacity'>
      <div className='aspect-video relative'>
        <Link href={`/novedades/${data.id}/${sanitizeTitleForURL(data.title)}`}>
          <div className='absolute w-full h-full cursor-pointer text-white text-6xl flex justify-center items-center opacity-0 hover:opacity-100 article-locaciones z-20'>
            +
          </div>
        </Link>
        <ImageComponent
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='flex flex-col gap-y-3 py-3 lg:pl-12'>
        <div className='col flex flex-col gap-y-3'>
          <div className='lg:text-xl'>{data.date}</div>
          <div className='border-b border-t border-black py-3'>
            <h2 className='font-bold text-2xl'>
              <Link href={`/novedades/${data.id}/${sanitizeTitleForURL(data.title)}`}>
                <a className='hover:underline underline-offset-4'>{data.title}</a>
              </Link>
            </h2>
          </div>
          <p className='text-wrap mb-2'>{data.text}</p>
        </div>
        <div>
          <Link href={`/novedades/${data.id}/${sanitizeTitleForURL(data.title)}`}>
            <a className='bg-secondary py-3 px-16 rounded-full font-bold inline-block button-secondary text-primary text-sm uppercase'>
              + {texts[lan].link}
            </a>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default NovedadesItem
