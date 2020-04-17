/** @jsx jsx */
import {jsx, Container, Grid, Text } from 'theme-ui';

export const GettingStarted = () => {
  return (

    <section>
      <Container>
        <Grid columns={[1, null, null]}>
          <div>
            <Text sx = {{
                textAlign: `center`,
                fontSize: 5
            }}>
                With Foundik, your company can be set up within <span sx = {{
                    color: `primary`,
                fontWeight: `bold`
            }}>days</span>. We help with all the paperwork.
            </Text>
          </div>
        </Grid>
      </Container>
    </section>
  )
}