import { Link } from 'wouter'
import Image from '../../components/Image'

const PorqueItem = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-4 text-center w-full mt-8 px-16 lg:px-0 lg:w-4/5 lg:ml-7 lg:max-w-xs'>
      <div className='relative'>
        <Link href={`/porque-salta/${data.id}`}>
          <div className='absolute w-full h-full cursor-pointer bg-primary-opacity text-white text-4xl flex justify-center items-center z-20 opacity-0 hover:opacity-100 transition-all'>
            +
          </div>
        </Link>
        <div className='aspect-[5/4] object-cover w-full h-full rounded-xl overflow-hidden'>
          <Image
            src={data.image_main}
            alt={data.title}
          />
        </div>
      </div>
      <div className='px-6'>
        <h2 className='font-bold leading-none'>{data.title}</h2>
      </div>
    </article>
  )
}

export default PorqueItem
