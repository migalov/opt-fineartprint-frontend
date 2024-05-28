import React from 'react'

const CustomCheckbox = ({ id }: any) => {
  return (
    <>
        <input hidden={true} id="accept" type="checkbox" />
        <div className="bg-primary border-primary border-[2px] border-gray w-[20px] h-[20px] rounded-[4px] mt-1">
            <svg className="m-[1px]" xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                <path d="M1 6.5L6.5 11.5L13.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    </>
  )
}

export default CustomCheckbox
