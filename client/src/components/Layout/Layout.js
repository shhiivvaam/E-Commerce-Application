import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ( { children }) => {                   // { children } -> props
    return (
        <div>
            <Header />
            <main style={{ minHeight: '80vh' }}>
                {children}                   {/*  // children     -> props.children */}
            </main>
            <Footer />
        </div>
    )
}

export default Layout