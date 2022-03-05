/** @jsxImportSource theme-ui */
import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./ServicesComponent.css"
import { Grid, Card } from "@theme-ui/components"

const ServicesComponent = ({ data }) => {
  const Services = data.allContentfulServices.edges
  return (
    <div
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="servicesContainer"
    >
      <div>
        <h1 sx={{ marginTop: "10px", padding: "2px" }}>Services</h1>
      </div>
      <Grid
        sx={{
          alignItems: "center",
          alignContent: "center",
          marginLeft: "20px",
          padding: "20px",
          gridTemplateColumns: ["auto", "1fr 1fr"],
        }}
        columns={3}
      >
        {Services.map(({ node }) => {
          const title = node.service || node.slug
          return (
            <Card
              sx={{
                variant: "cards.compact",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
                width: "350px",
                height: "350px",
              }}
              key={node.slug}
            >
              <h3 itemProp="headline">{node.service}</h3>
              <div  sx={{
               
                width: ["200px", "350px"],
                height: ["200px", "350px"],
              }}  className="serviceImage">
                <GatsbyImage image={getImage(node.image)} alt={node.slug} />
              </div>
            </Card>
          )
        })}
      </Grid>
    </div>
  )
}

export default ServicesComponent
