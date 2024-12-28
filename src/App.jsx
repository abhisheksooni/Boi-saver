import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <>
    <section>
      <Nav/>
      <Outlet/>
      <div className="">Fotter</div>
    </section>
    </>
  )
}

export default App
