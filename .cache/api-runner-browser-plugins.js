module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/home/defauth/code/github/defauth98.github.io","commonmark":false},
    },{
      plugin: require('../node_modules/@chakra-ui/gatsby-plugin/gatsby-browser.js'),
      options: {"plugins":[],"resetCSS":true,"isUsingColorMode":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
