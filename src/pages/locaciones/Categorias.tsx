import { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

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
      <div className='flex flex-wrap gap-4 text-white'>
        {data.map(item => (
          <button
            key={item.id}
            className={`rounded-full w-52 py-3 uppercase font-bold text-xm  ${
              category === item.id ? 'bg-zinc-500' : 'bg-zinc-400 hover:bg-zinc-500'
            }`}
            onClick={() => handleCategories(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {text && <div className='mt-6 max-w-6xl'>{text}</div>}
    </div>
  )
}

export default Categorias
