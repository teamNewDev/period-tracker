import Calendar from 'react-calendar'
import { useState } from 'react'
import './common.scss'

const PeriodCalender = () => {
  const periodDaysInMonth = ['2024-2-6', '2024-2-7', '2024-2-8']
  const [periodDaysRange, setPeriodDaysRange] = useState([new Date(2024, 2, 6), new Date(2024, 2, 8)])

  // const hasMatchingPeriodDays = (date) => {
  //   const dateInISOString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  //   if (periodDaysInMonth.includes(dateInISOString)) {
  //     return true
  //   }
  // }

  return (
    <div className="period-calender">
      <Calendar
        value={periodDaysRange}
        // tileClassName={({ date, view }) => (view === 'month' && hasMatchingPeriodDays(date) ? 'period-day' : '')}
        onChange={() => {}}
        calendarType="gregory"
        selectRange={true}
      />
    </div>
  )
}

export default PeriodCalender
