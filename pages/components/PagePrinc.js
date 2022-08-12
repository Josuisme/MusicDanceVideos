import Link from 'next/link'
import React from 'react'
import tw from "tailwind-styled-components"


const PagePrinc = () => {
  return (
<div className="lg:flex lg:-mx-2 p-8 justify-center">
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Musica</h4>
            <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
        <ImgIcon src="https://cdn.pixabay.com/photo/2018/04/30/13/18/music-app-icon-3362643_960_720.png" alt="baile" />
      </div>
            <p className="text-blue-500">La mejor musica para bailar</p>
          <Link href="/musica">
            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            
              <span href="/musica" className="mx-1">Link</span>
            </button>
          </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> Videos sobre baile</h4>
            <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
        <ImgIcon src="https://cdn.pixabay.com/photo/2018/03/29/15/21/silhouette-3272487_960_720.jpg" alt="baile" />
      </div>
            <p className="text-blue-500">Aprende nuevos pasos</p>
            <Link href="/baile">
            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <span className="mx-1">Link</span>
            </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Clases de canto</h4>
            <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
        <ImgIcon src="https://cdn-icons-png.flaticon.com/512/2302/2302224.png" alt="baile" />
      </div>
            <p className="text-blue-500">Tips para cantar mejor</p>
          <Link href="/canto">
            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <span className="mx-1">Link</span>
            </button>
          </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Sobre maquillaje</h4>
            <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
        <ImgIcon src="https://cdn-icons-png.flaticon.com/512/3378/3378785.png" alt="baile" />
      </div>
            <p className="text-blue-500">Clases de maquillaje y más</p>
          <Link href="/maquillaje">
            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <span className="mx-1">Link</span>
            </button>
          </Link>
          </div>
        </div>
      </div>
  )
}

export default PagePrinc

const ImgIcon=tw.img
`
lg:h-20 md:h-35 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100
`