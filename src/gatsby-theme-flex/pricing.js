/** @jsx jsx */
import { jsx, Grid, Card, Heading, Text, Button } from 'theme-ui';
import { Link } from 'gatsby';
import check from '../images/check.svg';

import { css } from '@emotion/core';

import { ERESIDENCY_URL } from '../constants';

const BaseStyles = {
  card: {
    backgroundColor: 'default',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    borderRadius: '5px',
    padding: '30px',
    textAlign: 'center'
  },
  cardChildren: {
    marginY: '10px'
  }
}

const styles = {
  cardPrimary: {
    ...BaseStyles.card,
    borderStyle: 'solid',
    borderColor: 'primary',
    borderWidth: '10px 0 0 0'
  },
  cardSecondary: {
    ...BaseStyles.card,
    borderStyle: 'solid',
    borderColor: 'secondary',
    borderWidth: '10px 0 0 0'
  },
  cardImage: {
    textAlign: 'center'
  }
}

export const Pricing = () => {

  return (
    <Grid columns={[1, null, 3]} gap={10} sx={{ marginTop: '40px' }}>
      <Grid sx={{ textAlign: 'center', margin: 'auto' }}>
        <Heading as='h5'>Only Requirement</Heading>
        <a href={ERESIDENCY_URL} target='__blank'
          css={css`
          color: #07c;
          text-decoration: none;
          &:hover {
            text-decoration: none !important; 
          }
        `}
        >
          <Text>
            Estonian e-Residency
          </Text>
        </a>
      </Grid>
      <Card sx={styles.cardPrimary}>
        <Heading as='h5' sx={{ fontWeight: 300 }}>One Time Cost</Heading>
        <Heading as='h3' sx={{ marginY: '5px' }}>&euro;260</Heading>
        <Text sx={{ fontSize: 'small', color: '#BDBDBD' }}>One Time Billing</Text>

        <Text sx={{
          fontWeight: 100,
          textAlign: 'left'
        }}>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>Entity registration</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>State fee (190€+25€ for API)</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>TW balance+card opening</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>Community membership</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>First month service fee</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>Contact person & address service</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>Tax compliance and filing</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>Sales invoices and collection</span>
          </div>

          <div style={{ textAlign: 'center', marginTop: '25px' }}>
            <Link to='/pricing' style={{
              textDecoration: 'none'
            }}>
              <Button sx={{ width: '100%' }}>
                <div sx={{ margin: 'auto' }}>Choose Plan</div>
              </Button>
            </Link>
          </div>
        </Text>
      </Card>
      <Card sx={styles.cardSecondary}>
        <Heading as='h5' sx={{ fontWeight: 300 }}>Monthly Subscribtion</Heading>
        <Heading as='h3' sx={{ marginY: '5px' }}>Starting from &euro;129 only</Heading>
        <Text sx={{ fontSize: 'small', color: '#BDBDBD' }}>Cancel anytime!</Text>

        <Text sx={{
          fontWeight: 100,
          textAlign: 'left'
        }}>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>Tax Handling</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>Invoicing</span>
          </div>
          <div>
            <img src={check} sx={{ marginRight: '10px' }} alt={'loading'} />
            <span>24x7 supprt</span>
          </div>
          &nbsp;
          <div style={{
            textAlign: 'center',
            marginTop: '185px',
          }}>
            <Link to='/pricing' style={{
              textDecoration: 'none'
            }}>
              <Button sx={{ width: '100%' }} variant="secondary">
                <div sx={{ margin: 'auto' }}>Know More</div>
              </Button>
            </Link>
          </div>
        </Text>
      </Card>
    </Grid>
  )
}