import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import BeneficiosItem from './BeneficiosItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/beneficios/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='my-12 lg:my-24 max-w-6xl m-auto px-6'>
        {loading ? (
          <div className='w-full flex justify-center items-center h-96'>
            <Loader />
          </div>
        ) : (
          data.map(item => (
            <BeneficiosItem
              key={item.id}
              data={item}
              lan={lan}
            />
          ))
        )}
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[5][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
