import Link from 'next/link'
import React from 'react'
import tw from "tailwind-styled-components"


const GaleryOfItemsCanto = () => {
  return (
<div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-gray-200">
        <div className="grid grid-cols-2 gap-3">
          <div className="w-80 bg-white p-3">
            <h2 className="text-xl m-2 text-center">Buscar en Youtube</h2>
            <Link href="https://www.youtube.com/results?search_query=canto">
            <Img className="h-52 w-full object-cover" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" />
            </Link>

          </div>
          <div className="w-80 bg-white p-3">
          <h2 className="text-xl m-2 text-center">Buscar en Facebook</h2>
          <Link href="https://www.facebook.com/search/top/?q=canto">
            <Img className="h-52 w-full object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png" />
          </Link>

          </div>
          <div className="w-80 bg-white p-3">
          <h2 className="text-xl m-2 text-center">Buscar en Vimeo</h2>
          <Link href="https://vimeo.com/">
            <Img className="h-52 w-full object-contain" src="https://seeklogo.com/images/V/vimeo-icon-logo-441934AEB1-seeklogo.com.png" />
          </Link>

          </div>
          <div className="w-80 bg-white p-3">
          <h2 className="text-xl m-2 text-center">Buscar en Blogs</h2>
          <Link href="https://vokalo.es/blog">
            <Img className="h-52 w-full object-cover" src="https://st2.depositphotos.com/1420973/6409/i/450/depositphotos_64095317-stock-photo-blog-concept-cloud-chart-print.jpg" />
          </Link>

          </div>
          
        </div>
      </div>
  )
}

export default GaleryOfItemsCanto
const Img=tw.img
`

`