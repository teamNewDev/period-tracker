import './common.scss'

const PeriodLogInput = () => {
  return (
    <>
      <div className="period-log-input">
        {Array.from({ length: 31 }).map((_, index) => (
          <div key={index + 1} data-value={index + 1} className={index === 3 ? 'selected input' : 'input'}>
            {index + 1}
          </div>
        ))}
      </div>
    </>
  )
}

export default PeriodLogInput
