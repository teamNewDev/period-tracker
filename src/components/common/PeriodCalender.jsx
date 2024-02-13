import Calendar from 'react-calendar'
import './common.scss'

const PeriodCalender = () => {
  const datesToAddClassTo = ['2024-02-06', '2024-02-07', '2024-02-08']

  const dateHasClass = (date) => {
    return datesToAddClassTo.includes(date.toISOString().split('T')[0])
  }

  return (
    <div className="calender-wrapper">
      <Calendar
        // value={selectedDate}
        tileClassName={({ date, view }) => (view === 'month' && dateHasClass(date) ? 'myClassName' : null)}
        onChange={() => {}}
        calendarType="gregory"
        // showNeighboringMonth={false}
      />
    </div>
  )
}

export default PeriodCalender
