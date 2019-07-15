import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

const IndexPage = ({ data }) => {
  console.log(data);
  const homeData = data.contentfulHome;

  return (
    <Layout>
      <SEO title="Home" />
      <h2>{ homeData.aboutHeading }</h2>
      <p>{ homeData.about.about }</p>
      <Gallery images={data.contentfulGallery.gallery} />
    </Layout> 
  )
}

export const query = graphql`
  query {
    contentfulGallery {
      id
      title
      gallery {
        title
        imageDesktop {
          file {
            url
          }
        }
        imageTablet {
          file {
            url
          }
        }
        imageMobile {
          file {
            url
          }
        }
      }
    }
    contentfulHome {
      aboutHeading
      about {
        about
      }
    }
  }  
`

export default IndexPage
