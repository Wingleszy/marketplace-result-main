import React from 'react'
import { StyledHeader } from './StyledHeader'
import { ItemDesc } from './ItemDesc'
import { useLocation } from 'react-router-dom'
import Footer from './Footer/Footer'

export const Item = () => {
    const location = useLocation()
    return (
        <>
            <StyledHeader />
            <ItemDesc name={location.state.name} img={location.state.img} />
            <Footer />
        </>
    )
}
