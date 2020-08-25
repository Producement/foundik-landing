/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "gatsby-theme-flex/src/components/link"
import FooterNav from "gatsby-theme-flex/src/layout/footer-nav"
import PropTypes from "prop-types"

export default ({ links }) => {
  return (
    links && (
      <nav>
        <ul
          sx={{
            margin: 0,
            padding: 0,
            listStyle: `none outside none`,
            display: `flex`,
            flexDirection: `row`,
            alignItems: [`center`],
          }}
        >
          {links.map(({ title, path }) => (
            <li
              key={title}
              sx={{
                marginLeft: 4,
              }}
            >
              <Link
                to={path}
                sx={{
                  variant: `text.small`,
                  color: '#000000',
                  textDecoration: `none`,
                  '&:visited': {
                    color: '#000000'
                  }
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  )
}

FooterNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

