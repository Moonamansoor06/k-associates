 import * as React from "react"
import { StaticQuery, graphql } from 'gatsby';
import ServicesComponent from '../components/ServicesComponent'
import Layout from "../components/layout"

const Services = () => {
  return (
    <StaticQuery
      query={graphql`
     query { 
        allContentfulServices {
    edges {
      node {
        slug
        service
        image {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  }
     }
        `}
      render={data => {

        console.log('data is', data)
        return (

          <Layout>
           
            <ServicesComponent data={data} />

          </Layout>

        )
      }}
    />)
}



export default Services
 