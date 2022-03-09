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
        display: "grid",
        gridGap: 4,
        gridTemplateColumns: ["20% 30%"],
      }}
    >
      {/*  <div
  sx={{
    display: 'grid',
    gridGap: 4,
    gridTemplateColumns: ['auto', '2fr 1fr'],
  height:'auto'
  }}> */}
      <div className="addressDiv">
        <h5>Address: Shadmaan block 15</h5>
        <h5 className="lineHeight">Phone: +923122594945</h5>
      </div>
      <div sx={{alignSelf:'right'}} className="socialLinks">
        <h5>Email Address: kaafassociates@gmail.com</h5>
        <h5 sx={{ height: "auto" }} className="lineHeight">
          Facebook:{" "}
          <a
            sx={{ color: "white" }}
            href=" https://www.facebook.com/Kaaf-Associates-109103114998403/"
          >
            @kaafassociates
          </a>{" "}
        </h5>
      </div>
    </div>
    //  </div>
  )
}

export default Footer
