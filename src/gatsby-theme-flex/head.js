/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Helmet} from "react-helmet"

export const Head = (props) => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{props.name}</title>
      </Helmet>
    </div>
  )
}
