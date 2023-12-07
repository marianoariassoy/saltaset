import { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import HTML from '../../hooks/useHTML'

const Categorias = ({ lan, section, category, setCategory }) => {
  const [text, setText] = useState()
  const { data, loading } = useFetch(`/locaciones/secciones/categorias/${section}/${lan}`)

  const handleCategories = id => {
    setCategory(id)
    const text = data.find(item => item.id === id).text
    setText(text)
  }

  useEffect(() => {
    if (data) {
      setCategory(data[0].id)
      const text = data.find(item => item.id === data[0].id).text
      setText(text)
    }
  }, [section, setCategory, data])

  if (loading)
    return (
      <div className='mt-8 mb-12 px-6 lg:px-12'>
        <BeatLoader />
      </div>
    )

  return (
    <div className='mb-12 px-6 lg:px-12'>
      <div className='flex-wrap gap-4 hidden lg:flex'>
        {data.map(item => (
          <button
            key={item.id}
            className={`rounded-full w-52 py-1 uppercase text-xm font-bold border-black border  ${
              category === item.id ? 'bg-zinc-300 border-0' : 'hover:border-0 hover:bg-zinc-300'
            }`}
            onClick={() => handleCategories(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='lg:hidden'>
        <select
          name='category'
          className='w-full rounded-full py-3 font-bold px-6 appearance-none select'
        >
          {data.map(item => (
            <option
              key={item.id}
              className='text-sm '
              onClick={() => handleCategories(item.id)}
            >
              {item.title}
            </option>
          ))}
        </select>
      </div>
      {text && (
        <div className='mt-6'>
          <HTML text={text} />
        </div>
      )}
    </div>
  )
}

export default Categorias
