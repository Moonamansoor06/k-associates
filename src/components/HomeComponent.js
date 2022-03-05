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
    <div sx={{ marginTop: "40px" }} className="homeConatiner">
      <ImgRotator data={headerData} />
      <Grid
        sx={{
          gridTemplateColumns: ["auto", "1fr 1fr"],
          marginTop: "10%",
          marginBottom: "10%",
        }}
        column={2}
        width={"40%"}
        className="homeTab1"
      >
        <Card>
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
        </Card>

        <Card
          sx={{ display: "flex", alignItems: "center" }}
          className="homeImage"
        >
          <StaticImage
            src="../images/renovate.jpg"
            alt=""
            placeholder="blurred"
          />
        </Card>
      </Grid>
    </div>
  )
}

export default HomeComponent
