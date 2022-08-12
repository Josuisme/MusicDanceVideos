import React from 'react'
import Nav from './components/Nav'
import tw from "tailwind-styled-components"
import GaleryOfItemsMusic from './components/GaleryOfItemsMusic'

const musica = () => {
  return (
    <div>
        <Header>
        <Nav/>
        </Header>
        <div>
            <h2 className="text-5xl mx-auto text-left md:max-w-none md:text-center ">
                Musica
            </h2>
        </div>
        <GaleryOfItemsMusic/>
      </div>
  )
}

export default musica

const Header=tw.div
`
bg-gray-200 p-5  bg-gradient-to-r from-red-200 to-blue-500
`