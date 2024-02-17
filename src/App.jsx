import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GetStartedPage, HomePage, InitialSetUpPage, BottomNav } from './components'

const App = () => {
  const [storedPeriodData, setStoredPeriodData] = useState([])

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={storedPeriodData ? <HomePage /> : <GetStartedPage />} />
        <Route path="/setUp" element={<InitialSetUpPage />} />
      </Routes>

      <BottomNav />
    </div>
  )
}

export default App
