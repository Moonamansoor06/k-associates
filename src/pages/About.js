import * as React from "react"
import { StaticQuery, graphql } from 'gatsby';
import AboutComponent from '../components/AboutComponent'
import Layout from "../components/layout";


const About = () => {
  return (
    <StaticQuery
      query={graphql`
     query {
      allContentfulCompany(filter: {company: {eq: "kaaf-associates"}}) {
    edges {
      node {
        company
        slug
        vision
        mission{
          raw
        }
        objectives
        aboutImage{
         gatsbyImageData(layout: FIXED)
        }
      }
    }
  
}

}

        `}
      render={data => {

        console.log('data is from indexx', data)
        return (

          <Layout>
          
            <AboutComponent data={data} />

          </Layout>

        )
      }}
    />)
}



export default About
