/** @jsxImportSource theme-ui */
import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { StaticImage } from "gatsby-plugin-image"
import { Card, Grid, Text } from "theme-ui"
import ImgRotator from "./ImageRotator"
//import './homeComponent.css'

const HomeComponent = ({ data }) => {
  console.log("data is from HC =>", data)
  const company = data.allContentfulCompany.edges[0].node
  const headerData = data.allFile
  return (
    <div sx={{ marginTop: "40px" ,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", }} className="homeConatiner">
      <ImgRotator data={headerData} />
      <Grid
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10%",
          marginBottom: "10%",
        }}
        column={1}
        width={"80%"}
        className="homeTab1"
      >
        <h2
          sx={{
            width: "auto",
            variant: "styles.h2",
            marginTop: "40px",
            fontSize: ["20px", "36px"],
          }}
          className="homeTab2"
        >
          {company.company}
        </h2>
        <Text
          sx={{
            lineHeight: "2rem",
            letterSpacing: "2px",
            display: "block",
            textAlign: "justify",
            font: "fonts.body",
            fontWeight: "fontWeights.body",
            lineHeight: "lineHeight.body",
            fontSize: ["12px", "24px"],
          }}
          className="homeText"
        >
          {renderRichText(company.description)}
        </Text>
        <Text
          sx={{
            lineHeight: "2rem",
            letterSpacing: "2px",
            display: "block",
            textAlign: "justify",
            font: "fonts.body",
            fontWeight: "fontWeights.body",
            lineHeight: "lineHeight.body",
            fontSize: ["12px", "24px"],
          }}
          className="homeText"
        >
          <div>
            <h2>Our Team</h2>
            {company.team.map((abt, ind) => {
              return (
                <ul>
                  <li>{abt}</li>
                </ul>
              )
            })}{" "}
          </div>
        </Text>
        <StaticImage
          sx={{width:'100%'}}
          src="../images/renovate.jpg"
          alt=""
          placeholder="blurred"
        />

        {/* 
        <Card
          sx={{ display: "flex", alignItems: "center" }}
          className="homeImage"
        >
          <StaticImage
            src="../images/renovate.jpg"
            alt=""
            placeholder="blurred"
          />
        </Card> */}
      </Grid>
    </div>
  )
}

export default HomeComponent
