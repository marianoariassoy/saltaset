const FilmarItem = ({ data }) => {
  return (
    <article>
      <div className='text-primary mb-3 flex items-center gap-x-3 text-xl'>
        <img
          src={data.image}
          width='20'
          className='max-h-4'
        />
        <span className='uppercase whitespace-nowrap text-sm font-bold'>{data.title}</span>
        <hr className='w-full border-primary' />
      </div>
      <p className='text-wrap'>{data.text}</p>
    </article>
  )
}

export default FilmarItem
