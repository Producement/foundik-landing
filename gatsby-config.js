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
        title: `Sign in`,
        path: `https://app.foundik.com/auth/sign-in`
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Sign in`,
        path: `https://app.foundik.com/auth/sign-in`
      },
    ],
  },
  plugins: [`gatsby-theme-flex`],
}
