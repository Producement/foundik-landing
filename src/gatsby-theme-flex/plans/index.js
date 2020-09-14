/** @jsx jsx */
import { jsx, Heading, Card, Grid, Text } from 'theme-ui';
import { css } from '@emotion/core';
import { Plan } from './Plan';

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
      <div
        sx={{
          bg: '#316099',
          paddingY: '50px',
          marginBottom: '50px'
        }}
        css={css`
          &:after {
            content: "";
            position: absolute;
            margin: 0 -95px; 
            border-top: 35px solid blue;
            border-top-color: #316099; 
            border-left: 100px solid transparent;
            border-right: 100px solid transparent; 
          }
        `}
      >
        <Heading sx={{ fontSize: '48px', marginY: '40px', color: '#fff' }}>Pricing</Heading>
        <Heading sx={{ fontSize: '18px', marginY: '20px', color: '#fff' }}>Pricing is based on your company’s
          monthly revenue. Choose a range to get pricing details.</Heading>
      </div>
      <div sx={{ maxWidth: 'container', margin: 'auto' }}>
        <Grid gap={10}
          columns={[1, 3, 3]}>
          <Plan
            name="Starter"
            price="129"
            subtitle="For individuals who are just getting started"
            features={features.starter}
          />

          <Plan
            name="Standard"
            price="159"
            subtitle="For established business owners"
            features={features.standard}
            primary={true}
          />

          <Plan
            name="Corporate"
            price="?"
            subtitle="For established business owners"
            features={features.corporate}
            buttonLabel="Ask for quote"
          />
        </Grid>
      </div>
    </section>
  );
}