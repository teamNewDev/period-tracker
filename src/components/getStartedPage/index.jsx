import { useNavigate } from 'react-router-dom'
import womanWithFile from '../../assets/womanWithFIle.svg'
import './index.scss'

const GetStartedPage = () => {
  const navigate = useNavigate()

  return (
    <div className="get-started-page">
      <h2 className="header">
        Period <span>Tracker</span>
      </h2>

      <div className="illustration-wrapper">
        <img src={womanWithFile} alt="woman with file" />
      </div>

      <p className="text">Elegant, user-friendly women&#39;s health tracker.</p>

      <button type="button" className="get-started-button" onClick={() => navigate('/setUp')}>
        <span>Get Started</span>
      </button>
    </div>
  )
}

export default GetStartedPage
