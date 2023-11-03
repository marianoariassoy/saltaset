import { Route, Switch } from 'wouter'
import Home from './pages/home/index'
import Locaciones from './pages/locaciones/index'
import FilmarEnSalta from './pages/filmar-en-salta/index'
import FilmarEnSaltaFormulario from './pages/filmar-en-salta/Formulario'
import Directorio from './pages/directorio/index'
import EmpresasForm from './pages/directorio/EmpresasForm'
import Profesionales from './pages/directorio/profesionales'
import ProfesionalesForm from './pages/directorio/ProfesionalesForm'
import Filmografia from './pages/filmografia/index'
import Beneficios from './pages/beneficios/index'
import Error from './pages/error/index'
import LocacionesDetalles from './pages/locaciones/Detalles'
import PorqueSalta from './pages/porque-salta/index'

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
        path='/filmar-en-salta/formulario'
        component={FilmarEnSaltaFormulario}
      />
      <Route
        path='/locaciones/:id'
        component={LocacionesDetalles}
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
        path='/directorio/empresas/formulario'
        component={EmpresasForm}
      />
      <Route
        path='/directorio/profesionales'
        component={Profesionales}
      />
      <Route
        path='/directorio/profesionales/formulario'
        component={ProfesionalesForm}
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
      <Route
        path='/porque-salta'
        component={PorqueSalta}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
