import './App.scss'
import Layout from './views/Layout'
import Login from './views/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Layout/>}/>
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
