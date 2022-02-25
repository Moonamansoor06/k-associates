import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function ImgRotator({ data }) {
 
   const allImages = data.allFile.edges;
   const [currentImage, setCurrentImage] = useState({});
    var num = 0
   //const imgLenth=allImages.length;
 
   useEffect(() => {
      const interval = setInterval(() => {

         setCurrentImage(allImages[num].node.childImageSharp.gatsbyImageData)
      
         num < 4 ? num++ : num = 0;
    
      }, 5000);
      return () => clearInterval(interval);
   }, [num]);

   return (
      <GatsbyImage
         image={currentImage}
         key={num}
         alt=""
         loading="eager"
         style={{width:'100%',height:'auto'}} />
   );
}

export default ImgRotator;