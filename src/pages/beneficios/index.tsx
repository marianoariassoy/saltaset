import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import BeneficiosItem from './BeneficiosItem'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='my-24'
        id='beneficios'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20'>
          <BeneficiosItem />
        </section>
      </section>
      <HeadProvider>
        <Title>{menu[5][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
