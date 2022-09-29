

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import UserInput from './pages/Login'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {


  return (
    
    <HashRouter >
 
      <Routes>
        <Route path='/' element={<UserInput/>}/>

        <Route element={<ProtectedRoutes/>}>

          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokemonDetail/>}/>
        </Route>

      </Routes>
    </HashRouter>

  )
}

export default App
