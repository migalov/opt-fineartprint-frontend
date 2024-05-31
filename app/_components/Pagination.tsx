import React from 'react'

const Pagination = ({ title, countPages}: any) => {
  return (
    <div className="flex flex-col gap-4">
        <h3 className="text-h3 font-bold">{title}</h3>
        <ul className="flex flex-wrap items-center gap-4">
            {[...Array(countPages)].map((x, i) =>
                <li key={i}><a className="w-[2.5em] h-[2.5em] flex justify-center items-center border-gray bg-gray border-[2px] rounded-[5px] hover:bg-white hover:font-medium hover:border-primary" href={`?page=${i+1}`}>{i+1}</a></li>
            )}
        </ul>
    </div>
  )
}

export default Pagination
