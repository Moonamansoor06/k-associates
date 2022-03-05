/** @jsxImportSource theme-ui */
import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./aboutComponent.css"

const AboutComponent = ({ data }) => {
  const About = data.allContentfulCompany.edges[0].node

  return (
    <div
    sx={{marginTop: "40px", marginBottom: "40px", width: "100%", }}
      className="aboutContainer"
    >
      <div sx={{marginTop:'20px', marginBottom:'20px', width: "100%", height:'auto',display:'flex',
              flexDirection:'column',
              alignItems:'center',alignContent:'center'}} className="aboutImage">
        <GatsbyImage image={getImage(About.aboutImage)} alt={About.slug} />
      </div>
      
        <div  sx={{display:'flex',
              flexDirection:'column',
              alignItems:'center',alignContent:'center'}}>
          <h1 sx={{ marginTop: "10px", padding: "2px" }}>Profile</h1>
        </div>

        <div sx={{width:'90%',  marginLeft:'40px',marginRight:'40px'}}>
        <h2>Vision</h2>
        <p
          sx={{
            lineHeight: "1rem",
            letterSpacing: "1px",
            display: "block",
            textAlign: "justify",
            fontSize:'20px'
          }}
        >
          {About.vision}
        </p>
        <h2>Mission</h2>
        <p
          sx={{
            lineHeight: "2rem",
            letterSpacing: "2px",
            display: "block",
            textAlign: "justify",
            fontSize:'20px'
          }}
        >
          {renderRichText(About.mission)}
        </p>
        <h2>Objectives</h2>
        <div
          sx={{
            lineHeight: "2rem",
            letterSpacing: "2px",
            display: "block",
            textAlign: "justify",
            fontSize:'20px'
          }}
        >
          {About.objectives.map((abt, ind) => {
            return (
              <ul>
                <li>{abt}</li>
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
