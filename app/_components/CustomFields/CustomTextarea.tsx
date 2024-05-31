import React from 'react'

const CustomTextarea = ({label, name}: any) => {
  return (
    <div>
        <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700">{label}</label>
        <textarea
            name={name}
            id="OrderNotes"
            className="mt-2 w-full rounded-8 border-dark-gray border-[1px] bg-gray align-top sm:text-sm px-3 py-4"
            rows={4}
            placeholder="Enter any additional order notes..."
        ></textarea>
    </div>
  )
}

export default CustomTextarea
