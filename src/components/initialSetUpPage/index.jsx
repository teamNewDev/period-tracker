import { useState } from 'react'
import { PeriodCalender, VerticalMenu } from '../common'
import './index.scss'

const InitialSetUpPage = () => {
  const [periodLog, setPeriodLog] = useState({ cycleLength: '2', periodLength: '', lastPeriodDate: '' })

  return (
    <>
      {periodLog.cycleLength && (
        <div className="set-up-page">
          <div className="header">
            <p className="title">How long is your average cycle?</p>
            <span className="subtitle">If you’re irregular or not sure, tap ‘Not Sure’</span>
          </div>

          <VerticalMenu />

          <div className="button-wrapper">
            <button type="button" className="not-sure-button">
              <span>Not Sure</span>
            </button>
            <button type="button" className="confirm-button">
              <span>Confirm</span>
            </button>
          </div>
        </div>
      )}

      {periodLog.periodLength && (
        <div className="set-up-page">
          <div>
            <p className="title">What is your average Period length?</p>
            <span className="subtitle">If you’re irregular or not sure, tap ‘Not Sure’</span>
          </div>

          {/* <PeriodLogInput /> */}

          <div className="button-wrapper">
            <button type="button" className="not-sure-button">
              <span>Not Sure</span>
            </button>
            <button type="button" className="confirm-button">
              <span>Confirm</span>
            </button>
          </div>
        </div>
      )}

      {periodLog.lastPeriodDate && (
        <div className="set-up-page">
          <div className="header">
            <p className="title">When did you start your last period?</p>
            <span className="subtitle">If you’re irregular or not sure, tap ‘Not Sure’</span>
          </div>

          <div className="calender-wrapper">
            <PeriodCalender />
          </div>

          <div className="button-wrapper">
            <button type="button" className="not-sure-button">
              <span>Not Sure</span>
            </button>
            <button type="button" className="confirm-button">
              <span>Confirm</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default InitialSetUpPage
