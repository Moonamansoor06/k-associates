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
          gatsbyImageData(width: 350, height: 330)
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
 