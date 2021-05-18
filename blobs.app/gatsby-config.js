module.exports = {
  siteMetadata: {
    siteUrl: 'https://blobs.app',
    name: 'blobs.app',
    description: 'Generate beautiful blob shaped NFT from StopTrippin - a healing network, On the Ropsten Network',
    descriptionLong:
      'Customizable Colors and patterns, Create random or fixed blobs, loop, animate, clip them with ease, and NFT Minted.',
    short_name: 'Colors generator',
    start_url: '/',
    background_color: '#d7819b',
    theme_color: '#d7819b',
    display: 'minimal-ui',
    icon: 'src/images/blobs.png',
    author: '@StopTrippin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
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
        name: 'blobs.app',
        short_name: 'Colors Mints and Commodities',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#d7819b',
        display: 'standalone',
        icon: 'src/images/blobs.png',
      },
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-152760218-1',
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
        portalZIndex: 40,
      },
    },
  ],
};
