import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children, title, description, keywords, author }) => {                   // { children } -> props
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                <ToastContainer />
                {children}                   {/*  // children     -> props.children */}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'E Commerce App - Shop Now',
    description: 'MERN STACK PROJECT',
    keywords: 'mern, react, node, mongodb, Project, Full Stack',
    author: 'shhiivvaam'
}

export default Layout