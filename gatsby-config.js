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
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 400, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
        urlOverrides: [
          {
            id: 'youtube',
            embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
          }
        ] 
      }
    },
    {
      resolve: 'gatsby-remark-audio',
      options: {
        preload: 'auto',
        loop: false,
        controls: true,
        muted: false,
        autoplay: false
      }
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
