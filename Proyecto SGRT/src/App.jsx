import { Menu } from './components/shared/menu/menu'
import { Route, Routes } from 'react-router-dom'
import { Usuarios } from './components/Usuarios/Usuarios'
import './App.css'
import { Home } from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </div>
  )
}

export default App
