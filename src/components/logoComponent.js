import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";


const LogoComponent = () => {

  return (
    <StaticQuery
      query={graphql`{
 allFile(
    filter: {relativeDirectory: {eq: "mainLogo"}, name: {eq: "image"}, extension: {eq: "png"}}
  ) {
    edges {
      node {
        relativeDirectory
        childrenImageSharp {
          gatsbyImageData(pngOptions: {compressionSpeed: 10, quality: 100})
        }
      }
    }
  }
}
`}
      render={data => {
        const logoImage=data.allFile.edges[0].node.childrenImageSharp[0].gatsbyImageData
        console.log('image data', data)
        console.log('logo image data', logoImage)
        return (
      
           
       <GatsbyImage
          image={logoImage}
                    alt=""
          loading="eager"
         />
       
  );
}
}
  />)}

      export default LogoComponent
   
      
