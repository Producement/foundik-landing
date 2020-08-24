/** @jsx jsx */
import { jsx, Grid, Text } from 'theme-ui';

import { css } from '@emotion/core';

export const Contact = () => {

  const anchorCss = css`
                  color: #000;
                  font-weight: 100;
                  text-decoration: none;
                  &:visited {
                    text-decoration: none;
                    color: #000;
                    }
                  `

  return (
    <Grid
      columns={[1, 3, 3]}
      gap={10}
      sx={{
        paddingY: 5
      }}
    >
      <div sx={{
        marginY: 'auto'
      }} >
        <Grid
          columns={[2, null, 2]}
          sx={{
            fontSize: 16
          }}
        >
          <div
            sx={{
              borderRight: 'thistle solid',
              borderColor: 'primary',
              margin: 'auto'
            }}
          >
            <Text sx={{ padding: 5 }}>Address</Text>
          </div>
          <div sx={{ margin: 'auto'}}>
            <a href='https://goo.gl/maps/FAPcm7BBhY9MNrB1A' target='_blank' rel='noopener noreferrer' css={anchorCss}
            >
              <p>Pärnu mnt 20</p>
              <p>10141 Tallinn</p>
            </a>
          </div>
        </Grid>
      </div>
      <div sx={{
        marginY: 'auto'
      }}>
        <Grid
          columns={[2, null, 2]}
          sx={{
            fontSize: 16
          }}
        >
          <div
            sx={{
              borderRight: 'thistle solid',
              borderColor: 'primary',
              margin: 'auto'
            }}
          >
            <Text sx={{ padding: 5 }}>Support</Text>
          </div>
          <div sx={{ margin: 'auto'}}>
            <a href={'tel: +37256685499'} css={anchorCss}>
              <p>+372 566 85499</p>
            </a>
          </div>
        </Grid>
      </div>
      <div sx={{
        marginY: 'auto'
      }}>
        <Grid
          columns={[2, null, 2]}
          sx={{
            fontSize: 16
          }}
        >
          <div
            sx={{
              borderRight: 'thistle solid',
              borderColor: 'primary',
              margin: 'auto'
            }}
          >
            <Text sx={{ padding: 5 }}>Email</Text>
          </div>
          <div sx={{ margin: 'auto'}}>
            <Text sx={{
              fontWeight: 100
            }}
            >
              <a rel='noopener noreferrer' href='mailto:hello@foundik.com' target='_blank' css={anchorCss}>
                hello@foundik.com
              </a>
            </Text>
          </div>
        </Grid>
      </div>
    </Grid>
  )
}