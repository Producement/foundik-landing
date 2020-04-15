require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Foundik`,
    description: `Starter for the Flex theme.`,
    siteUrl: process.env.SITE_URL,
    logo: `logo2.png`,
    copyright: `© YYYY Flex. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `About`,
        path: `/about`,
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `About`,
        path: `/about`,
      },
    ],
  },
  plugins: [`gatsby-theme-flex`],
}
