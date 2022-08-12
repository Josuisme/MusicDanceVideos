import React from 'react'
import Nav from './components/Nav'
import tw from "tailwind-styled-components"
import GaleryOfItemsCanto from './components/GaleryOfItemsCanto'

const canto = () => {
  return (
    <div>
        <Header>
        <Nav/>
        </Header>
        <div>
            <h2 className="text-5xl mx-auto text-left md:max-w-none md:text-center ">
                Canto
            </h2>
        </div>
        <GaleryOfItemsCanto/>
      </div>
  )
}

export default canto

const Header=tw.div
`
bg-gray-200 p-5  bg-gradient-to-r from-red-200 to-blue-500
`