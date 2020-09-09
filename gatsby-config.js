require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Luca Agra`,
    position: `Fullstack developer`,
    description: `Um blog sobre desenvolvimento front-end`,
    author: `@LucaAgra`,
    siteUrl: `https://lucaagra.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    //Precisa ser a primeira para funcionar com gatsby remark
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },

          {
            resolve: "gatsby-remark-emojis",
            options: {
              active: true,

              class: "emoji-icon",

              escapeCharacter: "",

              size: 64,

              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "25px",
              },
            },
          },

          `gatsby-remark-lazy-load`,
          //PrismJS tem que ir no final
          `gatsby-remark-prismjs`,
        ],
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luca Agra`,
        short_name: `Luca Agra`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/fav-icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
