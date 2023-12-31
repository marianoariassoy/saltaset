import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Locaciones from './pages/locaciones'
import LocacionesDetalles from './pages/locaciones/Detalles'
import LocacionesBuscar from './pages/locaciones/Buscar'
import FilmarEnSaltaPermisos from './pages/filmar-en-salta/Permisos'
import FilmarEnSaltaSostenibilidad from './pages/filmar-en-salta/Sostenibilidad'
import FilmarEnSaltaFormulario from './pages/filmar-en-salta/Formulario'
import Directorio from './pages/directorio'
import DirectorioListado from './pages/directorio/Listado'
import DirectorioDetalles from './pages/directorio/Detalles'
import EmpresasForm from './pages/directorio/EmpresasForm'
import ProfesionalesForm from './pages/directorio/ProfesionalesForm'
import Filmografia from './pages/filmografia'
import Beneficios from './pages/beneficios'
import PorqueSalta from './pages/porque-salta'
import Novedades from './pages/novedades'
import NovedadesDetalles from './pages/novedades/Detalles'
import Error from './pages/error/index'
// import Soon from './pages/soon'

function App() {
  return (
    <Switch>
      {/* <Route
        path='/'
        component={Soon}
      /> */}
      <Route
        path='/'
        component={Home}
      />

      <Route
        path='/filmar-en-salta/permisos'
        component={FilmarEnSaltaPermisos}
      />
      <Route
        path='/filmar-en-salta/sostenibilidad'
        component={FilmarEnSaltaSostenibilidad}
      />
      <Route
        path='/filmar-en-salta/formulario'
        component={FilmarEnSaltaFormulario}
      />

      <Route
        path='/locaciones/buscar/:buscar'
        component={LocacionesBuscar}
      />
      <Route
        path='/locaciones/:id/:title'
        component={LocacionesDetalles}
      />
      <Route
        path='/locaciones/regiones'
        component={Locaciones}
      />
      <Route
        path='/locaciones/categorias'
        component={Locaciones}
      />
      <Route
        path='/locaciones/rutas-turisticas'
        component={Locaciones}
      />

      <Route
        path='/directorio/empresas/detalles/:id'
        component={DirectorioDetalles}
      />
      <Route
        path='/directorio/empresas/listado/:scid'
        component={DirectorioListado}
      />
      <Route
        path='/directorio/empresas/formulario'
        component={EmpresasForm}
      />
      <Route
        path='/directorio/empresas'
        component={Directorio}
      />

      <Route
        path='/directorio/profesionales/detalles/:id'
        component={DirectorioDetalles}
      />
      <Route
        path='/directorio/profesionales/listado/:scid'
        component={DirectorioListado}
      />
      <Route
        path='/directorio/profesionales/formulario'
        component={ProfesionalesForm}
      />
      <Route
        path='/directorio/profesionales'
        component={Directorio}
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
        component={Novedades}
      />
      <Route
        path='/novedades/:id/:title'
        component={NovedadesDetalles}
      />

      <Route
        path='/porque-salta'
        component={PorqueSalta}
      />
      <Route
        path='/porque-salta/:id'
        component={PorqueSalta}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
