/** @jsx jsx */
import { jsx, Grid, Image, Text } from 'theme-ui';
import producementLogo from '../images/producementLogo.png'
import robbyBobbyLogo from '../images/robbyBobbyLogo.png'
import {ERESIDENCY_URL, PRODUCEMENT_URL, ROBBY_BOBBY_URL} from "../constants";
import {css} from "@emotion/core";

export const About = () => {

  return (
    <Grid sx={{ marginTop: '80px' }}>
    <div sx ={{
      display: 'grid',
      gridGap: 8,
      gridTemplateColumns: [
        'auto',
        '1fr 1fr 1fr 1fr'
      ]
    }}
    >
      <div style={{
        alignContent: 'center'
      }}>
        <Image
        src={producementLogo}
        style={{
          width: '256px',
          height: '256px'
        }}
        />
      </div>
      <div>
        <Text sx={{
          fontWeight: 'bold',
          fontSize: '32px'
        }}>
          Producement
        </Text>
        <Text sx={{
          fontSize: '18px'
        }}>
          Producement is a startup consisted of high level product engineers. They are responsible for the
          software infrastructure of Foundik.
          {' '}
          <a href={PRODUCEMENT_URL} target='__blank'
             css={css`
          color: #07c;
          font-weight: bold;
          text-decoration: underline;
          &:hover { text-decoration: none !important; } 
        `}
          >
            Read more about Producement.
          </a>

        </Text>
      </div>
      <div>
        <Image
          src={robbyBobbyLogo}
          style={{
            width: '256px',
            height: '256px'
          }}/>
      </div>

      <div>
        <Text sx={{
          fontWeight: 'bold',
          fontSize: '32px'
        }}>
          Robby & Bobby
        </Text>
        <Text sx={{
          fontSize: '18px'
        }}>
          Robby & Bobby is a modern accountancy company with a focus on helping small and middle-size
          business owners develop their businesses and achieve their goals.
          {' '}
          <a href={ROBBY_BOBBY_URL} target='__blank'
             css={css`
          color: #07c;
          font-weight: bold;
          text-decoration: underline;
          &:hover { text-decoration: none !important; } 
        `}
          >
            Read more about Robby & Bobby.
          </a>
        </Text>

      </div>
    </div>
    </Grid>


  )

};