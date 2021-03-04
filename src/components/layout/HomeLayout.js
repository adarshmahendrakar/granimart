import React, { Fragment } from 'react'
import Navbar from '../headers/Navbar'
import Footer from '../footer/footer'
import { Box, Container } from '@material-ui/core'
import Subscribe from '../Subscribe'

export default function HomeLayout({children}) {

    return (
        <div  style={{display:'grid',gridTemplateRows:'auto 1fr auto',height:'98vh'}}>
            <header><Navbar/></header>
            <Container fixed>
                {children}
                <Box mb={5}/>
            <Subscribe/>
            </Container>
            <footer><Footer/></footer>
        </div>
    )
}
