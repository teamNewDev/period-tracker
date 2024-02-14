import { useState } from 'react'
import './common.scss'

const VerticalMenu = () => {
  const [selectedItem, setSelectedItem] = useState(2)

  return (
    <>
      <div className="vertical-menu-container">
        <div className="menu">
          {[...Array(20).keys()].map((index) => (
            <div key={index} className={`menu-item ${selectedItem === index ? 'selected' : ''}`}>
              Option {index + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default VerticalMenu
