import React from 'react'
import TitleH2 from '../TitleH2'

const InputUploadFile = () => {
  return (
    <div className="flex flex-col gap-4">
        <TitleH2>Загрузите файлы</TitleH2>
        <label htmlFor="pdf_file" className="flex flex-col items-center gap-6 bg-gray p-6 border-dashed border-dark-gray border-2 rounded-15 cursor-pointer w-full">
            <span>Перетащите файл в эту область...</span>
            <span className="py-4 px-8 bg-dark-gray rounded-15">Загрузить</span>
            <input hidden className="appearance-none" id="pdf_file" type="file" />
        </label>
    </div>
  )
}

export default InputUploadFile
