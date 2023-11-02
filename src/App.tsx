import { Route, Switch } from 'wouter'
import Home from './pages/home/index'
import Locaciones from './pages/locaciones/index'
import FilmarEnSalta from './pages/filmar-en-salta/index'
import Directorio from './pages/directorio/index'
import Profesionales from './pages/directorio/profesionales'
import Filmografia from './pages/filmografia/index'
import Beneficios from './pages/beneficios/index'
import Error from './pages/error/index'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/filmar-en-salta'
        component={FilmarEnSalta}
      />
      <Route
        path='/locaciones'
        component={Locaciones}
      />
      <Route
        path='/directorio/empresas'
        component={Directorio}
      />
      <Route
        path='/directorio/profesionales'
        component={Profesionales}
      />
      <Route
        path='/filmografia'
        component={Filmografia}
      />
      <Route
        path='/beneficios'
        component={Beneficios}
      />
      <Route
        path='/novedades'
        component={Home}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
