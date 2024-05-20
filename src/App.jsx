import {Switch,Route} from 'wouter'
import Inicio from './components/pages/Inicio.jsx'
import Navbar from './components/Navbar.jsx';
import Error404 from './components/pages/Error404.jsx';
import Contact from './components/pages/Contact.jsx'
function App() {
  return (
    <main className='min-h-screen w-full'>
      <Navbar/>
      <Switch>
        <Route path='/' component={Inicio}/>
        <Route path='/contact' component={Contact}/>

        <Route path='/404' component={Error404}/>
      </Switch>
    </main>
  )
}

export default App;
