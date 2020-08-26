/** @jsx jsx */
import { jsx, Grid, Card, Text, Button } from 'theme-ui';
import { BsPlus } from 'react-icons/bs'
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
};

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
};

export const Pricing = () => {

  return (
    <Grid sx={{ marginTop: '40px' }}>
      <Card sx={styles.cardSecondary}>
        <div sx={{
          display: 'grid',
          gridGap: 4,
          gridTemplateColumns: [
            'auto',
            '1fr 0.5fr 1fr'
          ]
        }}>
          <div style={{textAlign: 'center'}}>
            <Text sx={{
            }}>
              One time cost of
            </Text>
            <Text sx={{
              fontWeight: 'bold',
              fontSize: '25px'
            }}>
              &euro;260
            </Text>
            <Text sx={{
              color: 'secondary',
              fontWeight: 'bold',
              fontSize: '50px'
            }}>
              <BsPlus/>
            </Text>
            <Text>
              Monthly subscription fee
            </Text>
            <Text sx={{
              fontWeight: 'bold'
            }}>
              Starting from &euro;129* only
            </Text>
            <Text sx={{
              fontSize: '10px',
              color: '#AAAAAA'
            }}>
              Cancel anytime
            </Text>

            <div style={{
              textAlign: 'center',
              marginTop: '10px',
            }}>
              <Link to='/pricing' style={{
                textDecoration: 'none'
              }}>
                <Button sx={{ width: '100%' }} variant="secondary">
                  <div sx={{ margin: 'auto' }}>Learn More</div>
                </Button>
              </Link>
            </div>
            <Text sx={{
              fontSize: '10px',
              color: '#AAAAAA'
            }}>
              *monthly fee charges based on your monthly revenue
            </Text>
          </div>
          <div sx={{
            height: '100%'
          }}>
            <div sx={{
              '@media screen and (min-width: 40em)': {
                borderLeft: 'dotted 3px #333',
                textAlign: 'center',
                position: 'absolute',
                height: '300px',
                left: '50%',
              }
            }}>
            </div>
          </div>
          <div css={css`
            text-align: left;
              `}>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>Entity registration</span>
            </div>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>State fee (190€+25€ for API)</span>
            </div>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>TW balance + card opening</span>
            </div>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>Community membership</span>
            </div>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>First month service fee</span>
            </div>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>Contact person & address service</span>
            </div>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>Tax compliance and filing</span>
            </div>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>Sales invoices and collection</span>
            </div>
            <div>
              <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
              <span>24/7 Support</span>
            </div>

          </div>

        </div>
      </Card>
      <Text sx={{
        textAlign: 'center'
      }}>
        <span sx={{
          backgroundColor: 'danger',
          padding: '5px',
          fontWeight: 'bold',
          color: 'background',
          fontSize: '12px',
          marginRight: '5px'
        }}>
        REQUIREMENT
        </span>
        {' '}
        <a href={ERESIDENCY_URL} target='__blank'
                       css={css`
          color: #07c;
          font-weight: bold;
          text-decoration: underline;
          &:hover { text-decoration: none !important; } 
        `}
        >
          Estonian e-Residency
        </a>
        {' '}
        required before proceeding.

      </Text>
    </Grid>
  )
};