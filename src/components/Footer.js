/** @jsxImportSource theme-ui */
import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div as='footer' className='footer'sx={{
            paddingTop: "29px",
            paddingBottom: "2px",
            width:"100%",
          height:"auto"  
          }}>
            <div
  sx={{
    display: 'grid',
    gridGap: 4,
    gridTemplateColumns: ['auto', '2fr 1fr'],
 
  }}>
            <div className='addressDiv'>
            <h5 >Address: Shadmaan block 15</h5>
            <h5 className='lineHeight' >Phone: +923122594945</h5>
        </div>
        <div  sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "right",
          justifyContent: "right",
          height:'auto',
          width:'auto'

        }}  className="socialLinks">
            <h5 >Email Address: kaafassociates@gmail.com</h5>
            <h5 className='lineHeight'>
            Facebook: <a sx={{color:'white'}} href=" https://www.facebook.com/Kaaf-Associates-109103114998403/">
                 @Kaaf-Associates</a> </h5>
        </div>
        </div>
        </div>
    )
}

export default Footer
