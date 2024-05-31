import React from 'react'
import TableCell from './TableCell'

const DocumentParameterRow = ({ title, requiredValue, currentValue, status }: any) => {


    const colorCtatus = (status: boolean) => {
        if (status == true) return {
            color: "green",
            text: "ОК"
        }
        else return {
            color: "red",
            text: "Ошибка"
        }
    }

  return (
    <tr>
        <TableCell type="head">{title}</TableCell>
        <TableCell>{requiredValue}</TableCell>
        <TableCell>{currentValue}</TableCell>
        <TableCell bgColor={colorCtatus(status).color}>{colorCtatus(status).text}</TableCell>
    </tr>
  )
}

export default DocumentParameterRow
