/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "gatsby-theme-flex/src/components/link"
import HeaderNav from "gatsby-theme-flex/src/layout/header-nav";
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
            flexDirection: [`column`, `row`],
            width: [`100%`, `auto`],
          }}
        >
          {links.map(({ title, path }) => (
            <li
              key={title}
              sx={{
                marginLeft: [0, 32],
                marginBottom: [2, 0],
              }}
            >
              <Link
                to={path}
                style={{
                  textDecoration: `none`,
                  color: `text`,
                  fontSize: 1,
                  textTransform: `uppercase`,
                  letterSpacing: 1,
                  textAlign: `center`,
                  display: `block`,
                  "&:hover": {
                    color: `primary`,
                  },
                  "&.active": {
                    color: `primary`,
                    fontWeight: `bold`,
                  },
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
};

HeaderNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};