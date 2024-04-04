import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
    return (
      <>
         <Header/>
         {/* <div style={{height:'70vh'}}> */}
            <h1 className="text-center">{children}</h1>
         {/* </div> */}
           
         <Footer/>
      </>
    )
  }
