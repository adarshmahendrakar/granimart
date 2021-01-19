import React, { Fragment } from 'react'
import Navbar from '../headers/Navbar'
import Footer from '../footer/footer'

export default function HomeLayout({children}) {

    return (
        <div  style={{display:'grid',gridTemplateRows:'auto 1fr auto',height:'98vh'}}>
            <header><Navbar/></header>
            <main >
                {children}
            </main>
            <footer><Footer/></footer>
        </div>
    )
}
