const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docs',
    description: 'BlocJS Documentation',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/er/pindo/blocjs/docs/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docs',
        description: 'BlocJS Documentation',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/er/pindo/blocjs/docs',
          templates:
            '/Users/er/pindo/blocjs/node_modules/docz-core/dist/templates',
          docz: '/Users/er/pindo/blocjs/docs/.docz',
          cache: '/Users/er/pindo/blocjs/docs/.docz/.cache',
          app: '/Users/er/pindo/blocjs/docs/.docz/app',
          appPackageJson: '/Users/er/pindo/blocjs/docs/package.json',
          gatsbyConfig: '/Users/er/pindo/blocjs/docs/gatsby-config.js',
          gatsbyBrowser: '/Users/er/pindo/blocjs/docs/gatsby-browser.js',
          gatsbyNode: '/Users/er/pindo/blocjs/docs/gatsby-node.js',
          gatsbySSR: '/Users/er/pindo/blocjs/docs/gatsby-ssr.js',
          importsJs: '/Users/er/pindo/blocjs/docs/.docz/app/imports.js',
          rootJs: '/Users/er/pindo/blocjs/docs/.docz/app/root.jsx',
          indexJs: '/Users/er/pindo/blocjs/docs/.docz/app/index.jsx',
          indexHtml: '/Users/er/pindo/blocjs/docs/.docz/app/index.html',
          db: '/Users/er/pindo/blocjs/docs/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
