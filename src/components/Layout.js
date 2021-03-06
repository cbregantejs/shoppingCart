import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import Cart from './cart/index'
import { Helmet } from 'react-helmet-async';


const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - Shoppin Cart" : "Shoppin Cart" }</title>
            <meta name = "description" content={ description || "Shoppin Cart" } />
        </Helmet>
        <Header/>
        <Cart/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;