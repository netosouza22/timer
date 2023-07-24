import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import History from './pages/History'
import Home from './pages/Home'
import Settings from './pages/settings'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/historico" element={<History />}></Route>
        <Route path="/configuracao" element={<Settings />}></Route>
      </Route>
    </Routes>
  )
}
