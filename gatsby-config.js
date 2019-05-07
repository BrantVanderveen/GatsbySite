module.exports = {
  plugins: [
    'gatsby-plugin-typography',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
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
