import { Line } from '../../icons/icons'
import ReactPlayer from 'react-player'
import Image from '../../components/Image'

const DetallesComponent = ({ data, texts }) => {
  return (
    <section className='max-w-6xl m-auto px-6 pt-20 flex flex-col items-start gap-y-12'>
      <div className='row flex gap-x-6 items-center'>
        <div className='text-4xl lg:text-5xl'>
          <span className='block font-secondary-black uppercase'>{data.title}</span>
        </div>
        <div className='text-primary'>
          <Line />
        </div>
      </div>
      {data.video && (
        <div className='row w-full'>
          <ReactPlayer
            url={data.video}
            playing={true}
            controls={true}
            width='100%'
            height='100%'
            className='aspect-video block'
          />
        </div>
      )}
      {data.image_main && (
        <div className='row w-full'>
          <Image
            src={data.image_main}
            alt={data.title}
          />
        </div>
      )}
      {data.text && (
        <div>
          <p className='text-wrap whitespace-break-spaces'>{data.text}</p>
        </div>
      )}
      {data.url && (
        <a
          href={data.url}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full px-6 w-52 py-3 font-bold bg-primary text-sm text-center button-black-hover'
        >
          {texts.link}
        </a>
      )}
    </section>
  )
}

export default DetallesComponent
