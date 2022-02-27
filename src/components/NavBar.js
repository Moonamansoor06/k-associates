/** @jsxImportSource theme-ui */
import { Link } from "gatsby"
import React from "react"
import { Flex } from "theme-ui"
import LogoComponent from "./logoComponent"
//import './navbar.css'

const NavBar = () => {
  return (
    <div
      sx={{
        display: "grid",
        gridGap: 2,
        gridTemplateColumns: ["auto", "1fr 2fr"],
      }}
    >
      <div sx={{ width: "200px" }} className="logoImgDiv">
        <LogoComponent />
      </div>
      <div
        as="nav"
        sx={{
          paddingTop: "29px",
          paddingBottom: "2px",
          opacity: "100",
          display: "flex",
          flexDirection: "row",
          alignItems: "right",
          justifyContent: "right",
        }}
      >
        <Flex className="navMain">
          <Link
            to="/"
            activeClassName="active"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&.active": {
                color: "activeLink",
                textDecoration: "underline",
              },
              "&:hover": {
                color: "hoverColor",
                pr: 3,
              },
            }}
          >
            Home
          </Link>

          <Link
            to="/About"
            activeClassName="active"
            sx={{
              pr: 3,
              pl: 3,
              color: "inherit",
              textDecoration: "none",
              "&.active": {
                color: "activeLink",
                textDecoration: "underline",
              },
              "&:hover": {
                color: "hoverColor",
              },
            }}
          >
            About
          </Link>

          <Link
            to="/Services"
            activeClassName="active"
            sx={{
              pr: 3,
              color: "inherit",
              textDecoration: "none",
              "&.active": {
                color: "activeLink",
                textDecoration: "underline",
              },
              "&:hover": {
                color: "hoverColor",
              },
            }}
          >
            Services
          </Link>

          <Link
            to="/Contact/"
            activeClassName="active"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&.active": {
                color: "activeLink",
                textDecoration: "underline",
              },
              "&:hover": {
                color: "hoverColor",
                pr: 3,
              },
            }}
          >
            Contact
          </Link>
        </Flex>
      </div>
    </div>
  )
}

export default NavBar
