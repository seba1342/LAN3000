module.exports = {
  siteMetadata: {
    title: 'Help yo self books',
    description: 'A directory of self help books, hand picked by the youth of today for the youth of today.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'help-yo-self-books',
        short_name: 'books',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-remark-copy-linked-files',
      options: {
        destinationDir: `${__dirname}/static`
      }
    }
  ],
};
