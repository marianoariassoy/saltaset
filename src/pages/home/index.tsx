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

const Index = () => {
  const [location] = useLocation()

  useEffect(() => {
    if (location === '/novedades') {
      const target = location.replace('/', '#') as string
      const targetElement = document.querySelector(`${target}`) as HTMLElement
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <Layout>
      <Hero />
      <Somos />
      <Filmar />
      <Porque />
      <Locaciones />
      <Novedades />
      <HeadProvider>
        <Title>Salta Set &bull; Film Commision</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
