/** @jsx jsx */
import {jsx, Container, Grid, Box, Text, Button, Flex, AspectImage} from 'theme-ui';
import people from '../images/peopleTrans.png';

import { css } from '@emotion/core';

export const Cover = () => {
  return (
    <section
      sx={{
        bg: `muted`,
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(24, 148, 236, 0.15) 100%)'
      }}
    >
      <Container>
        <Grid
          gap={6}
          columns={[1, null, 2]}
        >
          <Box sx={{
            marginTop: `8rem`,
            marginBottom: `5rem`
          }}>
            <Text sx={{
              fontSize: 8,
              fontWeight: `bold`,
              lineHeight: 1.5
            }}>
              Launch a startup from <span sx={{
              color: 'primary'
            }}>anywhere</span> in the World.
            </Text>
            <Text
              sx={{
                fontSize: 2,
                lineHeight: 1.5,
                marginY: 5
              }}>
              While you are focusing on your clients and on your business activities, we are taking care of your
              business’s taxes and accounting.
            </Text>

            <Flex
              sx={{
                paddingY: `5rem`
              }}
            >
              <a href='https://app.foundik.com/auth/sign-up'
                css={css`
                text-decoration: none;
                &:hover {
                  text-decoration: none !important; 
                }
              `}
              >
                <Button
                  sx={{
                    textAlign: `center`,
                    alignContent: `center`,
                    '@media screen and (min-width: 40em)': {
                      paddingY: `1.5rem`,
                      paddingX: `5rem`,
                    }
                  }}
                >Start Your Company</Button>
              </a>
            </Flex>
          </Box>
          <Box>
            <AspectImage
              ratio={1}
              src={people}
            />
          </Box>
        </Grid>
      </Container>
    </section>
  )
}

export default Cover;