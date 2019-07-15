import React from "react";

const GalleryImage = (props) => {
  const image = props.image;
  const imageDesktop =  image.imageDesktop.file.url;
  const imageTablet =   image.imageTablet.file.url;
  const imageMobile =   image.imageMobile.file.url;
  return (
    <picture className={props.className}>
      <source srcSet={imageTablet} media="(min-width: 1200px)" />
      <source srcSet={imageTablet} media="(min-width: 800px)" />
      <img 
      style={{margin:`0`}}
      alt={image.title}  
      src={imageTablet} />
    </picture>
  )
}

export default GalleryImage;