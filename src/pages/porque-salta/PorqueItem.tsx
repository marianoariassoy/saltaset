const PorqueItem = ({ data }) => {
  return (
    <article className='w-full border-b'>
      <div className='w-full max-w-6xl lg:px-6 m-auto flex gap-x-6 lg:gap-x-12 items-center  pb-6'>
        <div>
          <div className='w-14 h-14 aspect-square flex justify-center items-center bg-primary rounded-full'>
            <img
              src={data.image}
              alt={data.title}
              width='20'
              className='max-h-5'
            />
          </div>
        </div>
        <div className='flex-grow basis-0'>
          <p className='text-wrap text-sm lg:text-base'>
            <strong className='uppercase'>{data.title}:</strong> {data.text}
          </p>
        </div>
        <div>
          {data.url && (
            <a
              href={data.url}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full px-4 lg:px-6 py-2 uppercase font-bold bg-primary text-sm text-center button-black-hover flex justify-between items-center gap-x-2'
            >
              <span>INFO</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default PorqueItem
