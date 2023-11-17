import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { useEffect } from 'react'

const Categorias = ({ lan, section, setSection, category, setCategory, setLoading }) => {
  const { data: dataSections, loading: loadingSections } = useFetch(`/locaciones/secciones/${lan}`)
  const {
    data: dataCategories,
    loading: loadingCategories,
    setLoading: setLoadingCategories
  } = useFetch(`/locaciones/secciones/categorias/${section}/${lan}`)

  const handleSections = (id: number) => {
    setLoadingCategories(true)
    setLoading(true)
    setSection(id)
  }

  const handleCategories = (id: number) => {
    setLoading(true)
    setCategory(id)
  }

  useEffect(() => {
    !loadingCategories && setCategory(dataCategories[0].id)
  }, [dataCategories, loadingCategories, setCategory])

  return (
    <section className='px-6 lg:px-12 mb-12'>
      <div className='row flex flex-wrap justify-around lg:justify-normal gap-4 mb-4'>
        {loadingSections ? (
          <div className='my-2'>
            <BeatLoader />
          </div>
        ) : (
          dataSections.map((item, index) => (
            <button
              key={index}
              className={`rounded-full w-52 py-3 uppercase font-bold text-xs ${
                section === item.id
                  ? 'bg-primary border-primary text-secondary'
                  : 'bg-secondary text-white button-primary-hover'
              }`}
              onClick={() => handleSections(item.id)}
            >
              {item.title}
            </button>
          ))
        )}
      </div>
      <div className='row flex flex-wrap justify-around lg:justify-normal gap-4'>
        {loadingCategories ? (
          <div className='my-2'>
            <BeatLoader />
          </div>
        ) : (
          dataCategories.map(item => (
            <button
              key={item.id}
              className={`rounded-full w-52 py-3 uppercase font-bold text-xs  ${
                category === item.id
                  ? 'bg-primary border-primary text-secondary'
                  : 'bg-secondary text-primary button-primary-hover'
              }`}
              onClick={() => handleCategories(item.id)}
            >
              {item.title}
            </button>
          ))
        )}
      </div>
    </section>
  )
}

export default Categorias
