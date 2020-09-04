/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Branding = ({ style, name, logo }) => (
  <Link
    to="/"
    sx={{
      variant: `text.branding`,
      display: `flex`,
      alignItems: `center`,
      ...style,
    }}
  >
    <img
      src={logo}
      alt={name}
      style={{
        width: `150px`,
        mr: 2,
      }}
    />
    {name}
  </Link>
)

Branding.propTypes = {
  style: PropTypes.object,
  logo: PropTypes.string,
  name: PropTypes.string,
}

export default Branding
