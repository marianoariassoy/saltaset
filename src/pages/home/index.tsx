import Layout from '../../layout/Layout'
import Filmar from './Filmar'
import Hero from './Hero'
import Porque from './Porque'
import Somos from './Somos'
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
