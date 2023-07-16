/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  pathPrefix: "/Simply-Recipes",
  siteMetadata: {
    title: `Simply Recipes`,
    description: `Nice and clean recipes site`,
    author: "@HarshNarayan",
    person: { name: "Harsh Narayan", age: 21 },
    simpleData: ["item 1", "item 2"],
    complextData: [
      { name: "Harsh Narayan", age: 21 },
      { name: "H Narayan", age: 22 },
      { name: "Harsh N", age: 23 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mgmgttmh4owe`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
  ],
};
