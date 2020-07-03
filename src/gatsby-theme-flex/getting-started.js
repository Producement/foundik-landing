/** @jsx jsx */
import {jsx, Container, Grid, Text, Card} from 'theme-ui';
import BecomeEre from '../images/BecomeERe.svg';
import Company from '../images/company.svg';
import Sign from '../images/Sign.svg';
import Submit from '../images/Submit.svg';
import Tax from '../images/Tax.svg';

export const GettingStarted = () => {
  return (

    <section>
      <Container>
        <Grid columns={[1, null, null]}>
          <div>
            <Text sx={{
              textAlign: `center`,
              fontSize: 5
            }}>
              With Foundik, your company can be set up within <span sx={{
              color: `primary`,
              fontWeight: `bold`
            }}>days</span>. We help with all the paperwork.
            </Text>
          </div>
        </Grid>

        <Grid columns={[1, '5fr 5fr 5fr 5fr 5fr']} gap={5} sx={{
          paddingY: '6rem'
        }}>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              minWidth: '10rem',
              maxHeight: '20rem'
            }}>
              <img src={BecomeEre} alt='' />
              <Text sx={{ fontWeight: 100 }}>Become an E-Resident</Text>
            </Card>
          </div>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              minWidth: '10rem',
            }}>
              <img src={Submit} alt='' />
              <Text sx={{ fontWeight: 100 }}>Submit your online application</Text>
            </Card>
          </div>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              maxHeight: '17rem',
              minWidth: '10rem',
            }}>
              <img src={Sign} alt='' />
              <Text sx={{ fontWeight: 100 }}>Sign the company formation documents</Text>
            </Card>
          </div>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              minWidth: '10rem',
            }}>
              <img src={Company} alt='' />
              <Text sx={{ fontWeight: 100 }}>Your company is formed in Estonia</Text>
            </Card>
          </div>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              minWidth: '10rem',
            }}>
              <img src={Tax} alt='' />
              <Text sx={{ fontWeight: 100 }}>Receive a tax ID number from the IRS</Text>
            </Card>
          </div>
        </Grid>
      </Container>
    </section>
  )
}