import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import ImgRotator from './ImageRotator';

const Header = () => {

  return (
    <StaticQuery
      query={graphql`{
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
        
        return (
          <header>
            <ImgRotator data={data} />
          </header>
        )
          }}  />
  );}
      export default Header
   
      
