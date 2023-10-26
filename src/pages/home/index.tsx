import Layout from '../../layout/Layout'
import Filmar from './filmar'
import Hero from './hero'
import Porque from './porque'
import Somos from './somos'
import Locaciones from './locaciones'
import Novedades from './novedades'

const index = () => {
  return (
    <Layout>
      <Hero />
      <Somos />
      <Filmar />
      <Porque />
      <Locaciones />
      <Novedades />
    </Layout>
  )
}

export default index
