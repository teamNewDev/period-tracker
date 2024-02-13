import { Route, Routes } from 'react-router-dom'
import { GetStartedPage, InitialSetUpPage } from './components'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<GetStartedPage />} />
        <Route path="/setUp" element={<InitialSetUpPage />} />
      </Routes>
    </div>
  )
}

export default App
