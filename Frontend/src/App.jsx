
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './Pages/Dashboard'
import { SignupPage } from './Pages/SignupPage'
import { LoginPage } from './Pages/LoginPage'
import { Home } from './Pages/Home'

function App() {
  

  return (
    <>

    <BrowserRouter> 
    <Routes> 

      <Route path="/" element={<Home />} /> 
       <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path='/signup' element={<SignupPage />} />  
      <Route path='/login' element={<LoginPage />} />  

  

    </Routes> 
    </BrowserRouter>     
       
    </>
  )
}

export default App
