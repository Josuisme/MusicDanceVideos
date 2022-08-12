import React from 'react'
import Nav from './components/Nav'
import tw from "tailwind-styled-components"
import GaleryOfItemsMaquillaje from './components/GaleryOfItemsMaquillaje'

const maquillaje = () => {
  return (
    <div>
        <Header>
        <Nav/>
        </Header>
        <div>
            <h2 className="text-5xl mx-auto text-left md:max-w-none md:text-center ">
                Maquillaje
            </h2>
        </div>
        <GaleryOfItemsMaquillaje/>
      </div>
  )
}

export default maquillaje

const Header=tw.div
`
bg-gray-200 p-5  bg-gradient-to-r from-red-200 to-blue-500
`