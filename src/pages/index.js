import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import HomeComponent from "../components/HomeComponent"
import Layout from "../components/layout"
//import Header from '../components/header'

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
     query {
      allContentfulCompany(filter: {company: {eq: "kaaf-associates"}, slug: {}})
       {
    edges {
      node {
        company
        slug
        description {
          raw
        }
      }
    }
}
allFile(
    filter: {extension: {regex: "/(jpg)|(jpeg)/"}, relativeDirectory: {eq: "designs"}}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  }
}
        `}
      render={data => {
        console.log("data is from indexx", data)
        return (
          <Layout>
            <HomeComponent data={data} />
          </Layout>
        )
      }}
    />
  )
}

export default IndexPage