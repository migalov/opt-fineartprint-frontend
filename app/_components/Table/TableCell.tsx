import cn from 'classnames'

const TableCell = ({ type, children, bgColor, align, width }: any) => {
  return (
    <>
        {
            type == "head" ? <th className={cn("border border-dark-gray py-5 font-medium", `w-[${width}]`)}>{children}</th>
            :
            <td className={cn("border border-dark-gray py-6 px-12", {
                'bg-red': bgColor == "red",
                'bg-primary': bgColor == "green",
                'text-white': bgColor,
                'text-left': align == "left",
                'text-center': !align,
                "w-[25%]": width == "1/4"
            })}>{children}</td>
        }
    </>
  )
}

export default TableCell
