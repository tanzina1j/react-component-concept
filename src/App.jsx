import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Banner from './components/Banner'
import Services from './components/Services'
import Counter from './components/Counter'
import Portfolio from './components/Portfolio'
import Video from './components/Video'
import Team from './components/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <Banner/>
      <Header/>
      <Services/>
      <Counter/>
      <Video/>
      <Portfolio/>
      <Team/>
    </div>
  )
}

export default App
