const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/er/pindo/blocjs/docs/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/er/pindo/blocjs/docs/.docz/src/pages/404.js"))),
  "component---home-mdx": hot(preferDefault(require("/Users/er/pindo/blocjs/docs/home.mdx")))
}

