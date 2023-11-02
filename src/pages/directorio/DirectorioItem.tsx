const DirectorioItem = ({ data }) => {
  return (
    <article className='mb-6'>
      {Object.keys(data).map((key, index) => (
        <div
          key={index}
          className='flex flex-col'
        >
          <h2 className='font-bold'>{key}</h2>
          {data[key].map(item => (
            <a
              href='#'
              className='link-primary'
              key={item.id}
            >
              {item.title}
            </a>
          ))}
        </div>
      ))}
    </article>
  )
}

export default DirectorioItem
