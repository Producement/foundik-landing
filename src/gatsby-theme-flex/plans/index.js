/** @jsx jsx */
import { jsx, Heading, Card, Grid, Text } from 'theme-ui';
import { css } from '@emotion/core';
import { Plan } from './Plan';
import {ERESIDENCY_URL} from "../../constants";

const BaseStyles = {
  card: {
    backgroundColor: '#F3FAFF',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    borderRadius: '10px',
    padding: '30px'
  },
  cardChildren: {
    marginY: '10px'
  }
}

const styles = {
  card: {
    ...BaseStyles.card
  },
  cardImage: {
    textAlign: 'center'
  }
}

const features = {
  starter: [
    'TransferWise Account',
    'Accounting Service',
    'Up to 10 sales invoices per month',
    'Yearly Tax submission',
    'Standard support within 24hrs'
  ],
  standard: [
    'TransferWise Account',
    'Accounting Service',
    'Up to 25 sales invoices per month',
    'Yearly Tax submission',
    'Personal Accountant',
    'Premium customer support'
  ],
  corporate: [
    'TransferWise Account',
    'Accounting Service',
    'Unlimited invoices per month',
    'Yearly Tax submission',
    'Personal Accountant',
    'Premium customer support',
    'Custom Requirement'
  ]
}

export const Plans = () => {
  return (
    <section
      id="pricing"
      sx={{
        textAlign: 'center'
      }}
    >
      <Text sx={{fontSize: '24px'}}>
        A one time setup fee of
        {' '}
        <span sx={{fontWeight: 'bold', textDecoration: 'underline'}}>
          &euro;260
        </span>
        {' '}
        required plus a monthly fee based on your business needs.
      </Text>
      <Text sx={{
        textAlign: 'center',
        paddingY: '20px'
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
      <div sx={{ maxWidth: 'container', margin: 'auto', paddingTop: '30px' }}>
        <Grid gap={10}
          columns={[1, 3, 3]}>
          <Plan
            name="STARTER"
            price="129"
            subtitle="Ideal for individuals who are just getting started"
            features={features.starter}
          />

          <Plan
            name="STANDARD"
            price="159"
            subtitle="Ideal for small businesses"
            features={features.standard}
          />

          <Plan
            name="CORPORATE"
            price="?"
            subtitle="Ideal for established business owners"
            features={features.corporate}
            isCustomPlan={true}
          />
        </Grid>
      </div>
    </section>
  );
}