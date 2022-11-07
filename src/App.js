import React from 'react'
import { useState} from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import SharedLayout from './Pages/Sharedlayout'
import Error from './Pages/Error'
import Dashboard  from './Pages/Dashboard'
import Login from './Pages/Login'
import ProtectedRoute from './Pages/ProtectedRoute'

export default function App() {
  const [user, setUser] = useState(null);
  return (
  <BrowserRouter>
  <Routes>

          <Route exact path="/" element={<SharedLayout/>}>
         </Route>
         <Route index element={<Home />} />
         <Route exact path="About" element={<About/>}>
         </Route>
         <Route exact path="Contacts" element={<Contacts/>}>
         </Route>
         <Route path='login' element={<Login setUser={setUser} />} />
         <Route path='dashboard' element={ <ProtectedRoute user={user}>
      <Dashboard user={user} />
    </ProtectedRoute>}/>


         <Route exact path="*" element={<Error/>}>
         </Route>
    </Routes>
  </BrowserRouter>
  
  )
}

