import React from 'react'

const CustomInput = ({ type = "text", name, label }: any) => {
  return (
    <label
        htmlFor="email"
        className="relative block overflow-hidden rounded-md border border-dark-gray px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 rounded-8"
    >
        <input
            required
            type={type}
            id={name}
            placeholder={""}
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
        >
            {label}
        </span>
    </label>
  )
}

export default CustomInput
