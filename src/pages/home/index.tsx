import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import Hero from './hero'
import Somos from './somos'
import Filmar from './filmar'
import Porque from './porque'
import Locaciones from './locaciones'
import Novedades from './novedades'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const [location] = useLocation()
  const { lan } = useDataContext()

  useEffect(() => {
    if (location === '/novedades') {
      const targetElement = document.querySelector('#novedades') as HTMLElement
      window.scrollTo(0, targetElement.offsetTop)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <Layout>
      <Hero />
      <Somos lan={lan} />
      <Filmar lan={lan} />
      <Porque lan={lan} />
      <Locaciones lan={lan} />
      <Novedades lan={lan} />
      <HeadProvider>
        <Title>Salta Set &bull; Film Commision</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
