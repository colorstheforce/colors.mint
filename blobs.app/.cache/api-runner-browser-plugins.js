module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"blobs.app","short_name":"Colors Mints and Commodities","start_url":"/","background_color":"#ffffff","theme_color":"#d7819b","display":"standalone","icon":"src/images/blobs.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"a203ed132d853be1a6c67cd0427d1a7a"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-152760218-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/@chakra-ui/gatsby-plugin/gatsby-browser.js'),
      options: {"plugins":[],"isResettingCSS":true,"isUsingColorMode":true,"portalZIndex":40},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
