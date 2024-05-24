import {Switch,Route} from 'wouter'
import Inicio from './components/pages/Inicio.jsx'
import Navbar from './components/Navbar.jsx';
import Error404 from './components/pages/Error404.jsx';
import Contact from './components/pages/Contact.jsx'
import About from './components/pages/About.jsx';
import Projects from './components/pages/Projects.jsx';
function App() {
  return (
    <main className='min-h-screen w-full bg-no-repeat'>
      <Navbar/>
      <Switch>
        <Route path='/' component={Inicio}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects}/>

        <Route path='/404' component={Error404}/>
      </Switch>
    </main>
  )
}

export default App;
