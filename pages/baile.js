import React from 'react'
import Nav from './components/Nav'
import tw from "tailwind-styled-components"
import GaleryOfItemsBaile from './components/GaleryOfItemsBaile'

const baile = () => {
  return (
    <div>
        <Header>
        <Nav/>
        </Header>
        <div>
            <h2 className="text-5xl mx-auto text-left md:max-w-none md:text-center ">
                Baile
            </h2>
        </div>
        <GaleryOfItemsBaile/>
      </div>
  )
}

export default baile

const Header=tw.div
`
bg-gray-200 p-5  bg-gradient-to-r from-red-200 to-blue-500
`