/** @jsx jsx */
import { jsx, Container, Grid, Box, Text, Button, Flex, AspectImage } from 'theme-ui';
import people from '../images/peopleTrans.png';

export const Cover = () => {
  return (
    <section
      sx={{
        bg: `muted`
      }}
    >
      <Container>
        <Grid
          gap={6}
          columns={[1, null, 2]}
          sx={{
            padding: `5`
          }}
        >
          <Box sx={{
            paddingX: `5rem`,
            marginY: 0
          }}>
            <Text sx={{
              fontSize: 8,
              fontWeight: `bold`,
              lineHeight: 1.5
            }}>
              Launch a startup from <span sx={{
                color: 'primary'
              }}>anywhere</span> in the World. Now.
            </Text>
            <Text
              sx={{
                fontSize: 2,
                lineHeight: 1.5,
                marginY: 5
              }}>
              While you are focusing on your clients and on your business activities, we are taking care of your business’s taxes and accounting.
            </Text>

            <Flex
              sx={{
                // width: [128, null, null],
                paddingY: `5rem`,
                justifyContent: `center`
              }}
            >
              <Button
                sx={{
                  textAlign: `center`,
                  alignContent: `center`,
                  '@media screen and (min-width: 40em)': {
                    paddingY: `1.5rem`,
                    paddingX: `5rem`
                  }
                }}
              >Start Your Company</Button>
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