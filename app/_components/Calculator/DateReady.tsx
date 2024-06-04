import React from 'react'

const DateReady = ({ title, date }: any) => {
  return (
    <div className="flex justify-between">
        <h3 className="font-bold text-xl">{title}</h3>
        <span className="font-medium text-xl">{date}</span>
    </div>
  )
}

export default DateReady
