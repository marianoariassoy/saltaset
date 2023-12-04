import { Line } from '../../icons/icons'

const SostenibilidadItem = ({ data, number }) => {
  return (
    <article className='w-full border-b flex gap-x-6 items-center pb-6'>
      <div className='flex gap-x-6 items-center w-12 lg:w-44'>
        <span className='text-3xl lg:text-7xl font-secondary-black'>{number}</span>
        <div className='text-primary hidden lg:block'>
          <Line />
        </div>
      </div>
      <div className='flex-grow basis-0 lg:pr-6'>
        <h2 className='font-secondary-black text-xl lg:text-2xl uppercase'>{data.title}</h2>
        <p className='text-wrap whitespace-break-spaces'>{data.text}</p>
      </div>
      <div>
        <div className='w-14 h-14 lg:w-16 lg:h-16 aspect-square flex justify-center items-center bg-primary rounded-full'>
          <img
            src={data.image}
            alt={data.title}
            width='30'
            className='max-h-6'
          />
        </div>
      </div>
    </article>
  )
}

export default SostenibilidadItem
