module.exports = {
  plugins: [
    'gatsby-plugin-typography',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
  siteMetadata: {
    title: "Brant's Sweet Gatsby Site",
    author: "brant"
  },
}
