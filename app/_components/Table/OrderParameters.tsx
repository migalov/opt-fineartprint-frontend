import React from 'react'
import TableCell from './TableCell'

const OrderParameters = ({ options, count, price }: any) => {
  return (
    <tr>
        <TableCell align="left">
            {options}
        </TableCell>
        <TableCell>{ count }</TableCell>
        <TableCell>{price}&nbsp;₽</TableCell>
    </tr>
  )
}

export default OrderParameters
