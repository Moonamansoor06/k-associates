/** @jsxImportSource theme-ui */
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NavBar from "./NavBar"
import "./layout.css"
import NavBar2 from "./NavBar2"
import Footer from "./Footer"
import { Divider } from "@theme-ui/components"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div sx={{
      width: '100%',
      '@media screen and (mix-width: 40em)': {
        width: '50%',
      },
    }}>
      <NavBar2 />
      <Divider />
      <NavBar />
  
        <main>{children}</main>
    <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
