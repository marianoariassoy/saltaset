import { useState } from 'react'
import { useDataContext } from '../../context/useDataContext'
import { DownSmall, Close } from '../../icons/icons'

const FilmarItem = ({ data }) => {
  const { lan } = useDataContext()
  const [show, setShow] = useState(false)

  return (
    <article
      className='flex flex-col gap-y-6'
      key={data.id}
    >
      <button
        className={`rounded-full w-full py-2 uppercase font-bold  text-sm text-center relative button-black-hover transition-all flex items-center px-6 ${
          show ? 'bg-secondary text-white' : 'bg-primary'
        }`}
        onClick={() => setShow(!show)}
      >
        <div className='flex-grow basis-0'></div>
        <div>{data[lan].title}</div>
        <div className='flex-grow basis-0 flex justify-end'>{show ? <Close /> : <DownSmall />}</div>
      </button>
      <p className={`text-wrap text-sm fade-in ${show ? 'block' : 'hidden'}`}>{data[lan].text}</p>
    </article>
  )
}

export default FilmarItem
