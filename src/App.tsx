import { Route, Switch } from 'wouter'
import Home from './pages/home/index'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
    </Switch>
  )
}

export default App
