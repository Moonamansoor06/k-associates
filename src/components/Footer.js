/** @jsxImportSource theme-ui */
import React from "react"
import "./footer.css"
const Footer = () => {
  return (
    <div
      as="footer"
      className="footer"
      sx={{
        paddingTop: "29px",
        paddingBottom: "2px",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
       
      
      }}
    >
      <div sx={{
       
        height: "auto",
        display: "flex",
        flexDirection: "column",
       
     }}
      className="addressDiv">
        <h5>Address: Shadmaan block 14</h5>
        <h5 className="lineHeight">Phone: 03061115223</h5>
      </div>
      <div sx={{
        height: "auto",
       display: "flex",
       flexDirection: "column",
      alignSelf:'right'}} className="socialLinks">
        <h5>Email Address: kaafassociates@gmail.com</h5>
        <h5 sx={{ height: "auto" }} className="lineHeight">
          Facebook:{" "}
          <a
            sx={{ color: "white" }}
            href=" https://www.facebook.com/Kaaf-Associates-109103114998403/"
          >
            @kaafassociates
          </a>
        </h5>
      </div>
    </div>

  )
}

export default Footer
