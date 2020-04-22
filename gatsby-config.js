require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Foundik`,
    description: `Foundik`,
    siteUrl: process.env.SITE_URL,
    logo: `logo2.png`,
    copyright: `© YYYY Flex. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
    ],
  },
  plugins: [`gatsby-theme-flex`],
}
