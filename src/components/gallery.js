import React from "react";
import GalleryImage from "./gallery-image";
import galleryStyles from "./gallery.module.css";

const Gallery = ( props  ) => {
  const gallery = props.images.map((image, i) => <GalleryImage className={galleryStyles.galleryItem} key={i} image={image} />); 

  return (
    <section 
      className={galleryStyles.gallery}
    >
      { gallery }
    </section>
  )
}

export default Gallery;