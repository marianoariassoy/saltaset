import { useState } from 'react'
import { DownSmall, Close } from '../../icons/icons'
import HTML from '../../hooks/useHTML'

const FilmarItem = ({ data }) => {
  const [show, setShow] = useState(false)

  return (
    <article
      className='flex flex-col gap-y-6'
      id={data.id}
    >
      <button
        className={`rounded-full w-full py-2 uppercase font-bold text-sm text-center relative button-black-hover transition-all flex items-center px-6 ${
          show ? 'bg-secondary text-white' : 'bg-primary'
        }`}
        onClick={() => setShow(!show)}
      >
        <div className='flex-grow basis-0'></div>
        <div>{data.title}</div>
        <div className='flex-grow basis-0 flex justify-end'>{show ? <Close /> : <DownSmall />}</div>
      </button>
      <p className={`fade-in mb-3 ${show ? 'block' : 'hidden'} links-html`}>
        <HTML text={data.text} />
      </p>
    </article>
  )
}

export default FilmarItem
