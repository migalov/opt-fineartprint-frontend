import React from 'react'

const Checkbox = ({ text }: any) => {
  return (
    <label className="flex items-center gap-4" htmlFor="accept">
        <input hidden id="accept" type="checkbox" />
        <div className="bg-primary border-primary border-[2px] border-gray w-[20px] h-[20px] rounded-[4px]">
            <svg className="m-[1px]" xmlns="http:www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                <path d="M1 6.5L6.5 11.5L13.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div className="text-message">
            {text}
        </div>
        
    </label>
  )
}

export default Checkbox
