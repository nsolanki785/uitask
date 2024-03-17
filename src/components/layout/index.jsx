import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";


const Layout = ({children}) => {

    return (
        <>
            <Navbar />
              <div className="min-h-screen max-h-full">
                 {children}
              </div>
            <Footer />
        </>
    )
}

export default Layout;