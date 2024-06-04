import React from 'react'
import Image from 'next/image'
import TitleH2 from '../TitleH2'

const PreviewDocument = ({ src }: any) => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 p-10 rounded-15 shadow-default">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" transform="matrix(-1 0 0 1 32 0)" fill="#F0F0F0" />
                <path d="M6.29289 16.7071C5.90237 16.3166 5.90237 15.6834 6.29289 15.2929L12.6569 8.92893C13.0474 8.53841 13.6805 8.53841 14.0711 8.92893C14.4616 9.31946 14.4616 9.95262 14.0711 10.3431L8.41421 16L14.0711 21.6569C14.4616 22.0474 14.4616 22.6805 14.0711 23.0711C13.6805 23.4616 13.0474 23.4616 12.6569 23.0711L6.29289 16.7071ZM25 17L7 17L7 15L25 15L25 17Z" fill="white" />
            </svg>
            <Image width={300} height={300} className="flex-1" src="/images/preview_pdf.png" alt="" />
            <svg className="rotate-180" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" transform="matrix(-1 0 0 1 32 0)" fill="#F0F0F0" />
                <path d="M6.29289 16.7071C5.90237 16.3166 5.90237 15.6834 6.29289 15.2929L12.6569 8.92893C13.0474 8.53841 13.6805 8.53841 14.0711 8.92893C14.4616 9.31946 14.4616 9.95262 14.0711 10.3431L8.41421 16L14.0711 21.6569C14.4616 22.0474 14.4616 22.6805 14.0711 23.0711C13.6805 23.4616 13.0474 23.4616 12.6569 23.0711L6.29289 16.7071ZM25 17L7 17L7 15L25 15L25 17Z" fill="white" />
            </svg>
        </div>
    </div>
  )
}

export default PreviewDocument
