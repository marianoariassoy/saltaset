import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import BeneficiosItem from './BeneficiosItem'

const Index = () => {
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
    </Layout>
  )
}

export default Index
