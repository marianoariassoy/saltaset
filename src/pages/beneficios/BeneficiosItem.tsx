import ImageComponent from '../../components/Image'
import { Line } from '../../icons/icons'
import HTML from '../../hooks/useHTML'

const BeneficiosItem = ({ data, lan }) => {
  const texts = {
    ES: {
      link: 'Bases y condiciones'
    },
    EN: {
      link: 'Terms and conditions'
    },
    FR: {
      link: 'Termes et conditions'
    }
  }

  return (
    <article className='row flex flex-col lg:flex-row gap-12 mb-16'>
      <div className='col lg:w-2/5 flex flex-col gap-y-6 items-start'>
        <div className='flex gap-x-6 items-center'>
          <div className='text-4xl lg:text-5xl'>
            <span className='block font-secondary-black uppercase'>{data.title}</span>
          </div>
          <div className='text-primary'>
            <Line />
          </div>
        </div>
        <p className='text-wrap'>
          <HTML text={data.text} />
        </p>
        {data.url && (
          <a
            href={data.url}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full px-6 py-[.65rem] uppercase font-bold bg-primary text-sm button-black-hover text-center'
          >
            {texts[lan].link}
          </a>
        )}
      </div>
      <div className='col lg:w-3/5'>
        <div className='aspect-[6/4]'>
          <ImageComponent
            src={data.image}
            alt={data.title}
          />
        </div>
      </div>
    </article>
  )
}

export default BeneficiosItem
