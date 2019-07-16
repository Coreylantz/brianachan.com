const dotenv = require("dotenv");

if (process.env.ENVIROMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Briana Chan`,
    description: `Briana Chan Portfolio`,
    author: `Corey Lantz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Briana Chan Portfolio`,
        short_name: `Briana Chan`,
        start_url: `/`,
        background_color: `#00d2a1`,
        theme_color: `#00d2a1`,
        display: `minimal-ui`,
        icon: `src/images/briana-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin`],
            variants: ["Black 900", "Bold 700"],
            formats: [
              "woff",
              "woff2"
            ]
          },
          {
            family: `Montserrat`,
            subsets: [`latin`],
            variants: ["500"],
            formats: [
              "woff",
              "woff2"
            ]
          }
        ],
      },
    },
    `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
