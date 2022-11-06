import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import About from './Pages/About'
import Contacts from './Pages/Contacts'

export default function App() {
  return (
  <Router>
    <div>
      
      <li>
    <Link to="/">Home</Link>
      </li>
      <li>
    <Link to="/About">About</Link></li>
    <li>
    <Link to="/Contacts">Contacts</Link></li>

    <Switch>
          <Route path="/">
            <Home />
          </Route>

          <Route path='/About'>
            <About/>
          </Route>
          <Route path='/Contacts'>
            <Contacts/>
          </Route>
          </Switch>

      
    
    </div>
  </Router>
  )
}
