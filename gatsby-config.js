module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-169757940-1`,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
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
