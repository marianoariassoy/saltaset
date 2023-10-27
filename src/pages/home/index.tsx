import Layout from '../../layout/Layout'
import Hero from './Hero'
import Somos from './Somos'
import Filmar from './Filmar'
import Porque from './Porque'
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
