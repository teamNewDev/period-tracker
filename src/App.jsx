import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GetStartedPage, HomePage, InitialSetUpPage } from './components'

const App = () => {
  const [storedPeriodData, setStoredPeriodData] = useState([])

  console.log(storedPeriodData)

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={storedPeriodData ? <HomePage /> : <GetStartedPage />} />
        <Route path="/setUp" element={<InitialSetUpPage />} />
      </Routes>
    </div>
  )
}

export default App
