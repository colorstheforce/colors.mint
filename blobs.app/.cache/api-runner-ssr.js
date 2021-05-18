var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('D:/ETHBCHAIN/Crypto/eth/blobs.app/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('D:/ETHBCHAIN/Crypto/eth/blobs.app/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('D:/ETHBCHAIN/Crypto/eth/blobs.app/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('D:/ETHBCHAIN/Crypto/eth/blobs.app/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"blobs.app","short_name":"Colors Mints and Commodities","start_url":"/","background_color":"#ffffff","theme_color":"#d7819b","display":"standalone","icon":"src/images/blobs.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"a203ed132d853be1a6c67cd0427d1a7a"},
    },{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('D:/ETHBCHAIN/Crypto/eth/blobs.app/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-152760218-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      name: '@chakra-ui/gatsby-plugin',
      plugin: require('D:/ETHBCHAIN/Crypto/eth/blobs.app/node_modules/@chakra-ui/gatsby-plugin/gatsby-ssr'),
      options: {"plugins":[],"isResettingCSS":true,"isUsingColorMode":true,"portalZIndex":40},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
