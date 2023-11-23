import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { menu } from '../../data/data'
import { Link } from 'wouter'

const Categorias = ({ lan, section, setSection, category, setCategory, setLoading }) => {
  const [text, setText] = useState('')
  const { data, loading, setLoading: setloading } = useFetch(`/locaciones/secciones/categorias/${section}/${lan}`)

  const handleSections = (id: number) => {
    setloading(true)
    setLoading(true)
    setSection(id)
  }

  const handleCategories = (id: number) => {
    setLoading(true)
    setCategory(id)
    const text = data.find(item => item.id === id).text
    setText(text)
  }

  useEffect(() => {
    if (!loading) {
      setCategory(data[0].id)
      const text = data.find(item => item.id === data[0].id).text
      setText(text)
    }
  }, [data, loading, setCategory])

  return (
    <section className='px-6 lg:px-12 mb-12'>
      <div className='row flex flex-wrap justify-around lg:justify-normal gap-4 mb-4'>
        <button
          className={`rounded-full w-52 py-3 uppercase font-bold text-xm ${
            section === 2 ? 'bg-primary border-primary text-secondary' : 'bg-secondary text-white button-primary-hover'
          }`}
          onClick={() => handleSections(2)}
        >
          {menu[2][lan].categories[0].title}
        </button>
        <button
          className={`rounded-full w-52 py-3 uppercase font-bold text-xm ${
            section === 1 ? 'bg-primary border-primary text-secondary' : 'bg-secondary text-white button-primary-hover'
          }`}
          onClick={() => handleSections(1)}
        >
          {menu[2][lan].categories[1].title}
        </button>
        <Link href={menu[2][lan].categories[2].url}>
          <a
            className={`rounded-full w-52 py-3 uppercase font-bold text-xm text-center bg-secondary text-white button-primary-hover`}
          >
            {menu[2][lan].categories[2].title}
          </a>
        </Link>
      </div>
      <div className='row flex flex-wrap justify-around lg:justify-normal gap-4 text-white'>
        {loading ? (
          <div className='my-2'>
            <BeatLoader />
          </div>
        ) : (
          data.map(item => (
            <button
              key={item.id}
              className={`rounded-full w-52 py-3 uppercase font-bold text-xm  ${
                category === item.id ? 'bg-zinc-500' : 'bg-zinc-400 hover:bg-zinc-500'
              }`}
              onClick={() => handleCategories(item.id)}
            >
              {item.title}
            </button>
          ))
        )}
      </div>
      {text && <div className='mt-6 max-w-6xl'>{text}</div>}
    </section>
  )
}

export default Categorias
