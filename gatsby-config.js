require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Foundik`,
    description: `Foundik`,
    siteUrl: process.env.SITE_URL,
    logo: `logo2.png`,
    copyright: `© YYYY Foundik. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Pricing`,
        path: `#pricing`,
      },
      {
        title: `Contact`,
        path: `#contact`,
      },
      {
        title: `Sign in`,
        path: `https://app.foundik.com/auth/sign-in`
      },
    ],
    footerLinks: [
      {
        title: `Terms of Services`,
        path: `/terms`,
      },
      {
        title: `Privacy Policy`,
        path: `/privacy`
      },
      {
        title: `Home`,
        path: `/`
      },
      {
        title: `Sign In`,
        path: `https://app.foundik.com/auth/sign-in`
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-theme-flex`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/assets/images/`
        }
      }
    },
    {
      resolve: `gatsby-plugin-mixpanel`,
      options: {
        apiToken: '4b0bc471106756914eb5b2dd927d272d',
        pageViews: {
          '/': 'Site visit',
        },
      }
    }
  ]
}
