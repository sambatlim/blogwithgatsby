module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169757940-1",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Sambat Lim Blog`,
    author: `Sambat Lim`,
    description: `Sambat Lim blog. I blog about technology, web and mobile development`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Sambathlim86`,
      },
      {
        name: `github`,
        url: `https://github.com/sambatlim`,
      },
    ],
  },
}
