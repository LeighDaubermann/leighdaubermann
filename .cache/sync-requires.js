const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/leigh/Documents/Developer/Gatsby/gatsby-starter-hello-world/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/leigh/Documents/Developer/Gatsby/gatsby-starter-hello-world/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/leigh/Documents/Developer/Gatsby/gatsby-starter-hello-world/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/leigh/Documents/Developer/Gatsby/gatsby-starter-hello-world/src/pages/index.js"))),
  "component---src-pages-tours-js": hot(preferDefault(require("/Users/leigh/Documents/Developer/Gatsby/gatsby-starter-hello-world/src/pages/tours.js")))
}

