import './assets/scss/index.scss'
import { Route, Routes } from 'react-router-dom'
import Hello from './pages/Hello'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
    </Routes>
  )
}

export default App
