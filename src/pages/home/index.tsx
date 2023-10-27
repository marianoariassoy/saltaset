import Layout from '../../layout/Layout'
import Hero from './hero'
import Somos from './somos'
import Filmar from './filmar'
import Porque from './porque'
import Locaciones from './Locaciones'
import Novedades from './Novedades'

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
