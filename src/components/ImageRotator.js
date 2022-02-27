import React, { useState, useEffect } from "react";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

function ImgRotator({ data }) {
 
   const allImages = data.edges;
   const [currentImage, setCurrentImage] = useState({});
    var num = 0
   //const imgLenth=allImages.length;
 
   useEffect(() => {
      const interval = setInterval(() => {

         setCurrentImage(getImage(allImages[num].node.childImageSharp.gatsbyImageData))
      
         num < 10 ? num++ : num = 0;
    
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