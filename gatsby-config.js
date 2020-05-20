const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Περιστερωνοπηγή ιστορικές Αναμνήσεις`,
    author: {
      name: `Δημήτρης Λουκά`,
      summary: `Οι αναμνήσεις μου στην Περιστερωνοπηγή`,
    },
    description: `Περιστερωνοπηγή Ιστορικές Αναμνήσεις`,
    siteUrl: `https://Peristeronopigi.xyz/`,
    social: {
      twitter: `Kyrlouca`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "my-plugin-peristerona",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-remark-audio",
      options: {
        preload: "auto",
        loop: false,
        controls: true,
        muted: false,
        autoplay: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, "src/xassets"),
        name: `xassets`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/xassets/album`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
