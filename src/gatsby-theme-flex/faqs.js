/** @jsx jsx */
import { jsx, Heading, Text } from 'theme-ui';
import { css } from '@emotion/core';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import { APP_URL, ERESIDENCY_URL, SUPPORT_EMAIL } from '../constants';
import { Link } from 'gatsby';
import { FcExpand } from 'react-icons/fc';

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

export const FAQs = () => {
  return (
    <section
      id="faqs"
      sx={{
        textAlign: 'center'
      }}
      css={css`
        a {
          color: #07c;
        }
        a:visited {
          color: #07c;
        }
      `
      }
    >
      <div
        sx={{
          bg: '#316099',
          paddingY: '50px',
          marginBottom: '0px'
        }}
      >
        <Heading sx={{ fontSize: '48px', marginY: '40px', color: '#fff' }}>Frequestly Asked Questions</Heading>
      </div>
      <div sx={{ maxWidth: 'container', margin: 'auto', paddingY: '50px' }}>
        <Heading sx={{ fontSize: '32px', marginBottom: '50px'}}>1. Get Started</Heading>

        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">What is Foundik?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>Foundik is service provider that helps entrepreneurs to open a business in Estonia, 
            even without an address here. We don't only help you to register the company but also all the necessary things to run it.
            So, you could concentrate on your business and we can handle the rest.
            </Text>
          </AccordionDetails>
        </Accordion>
        <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">How to get started with Foundik?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
              <p>Signing up on Foundik is simple.</p>
              <p>If you already have an E-residency card. <a href={APP_URL}>Sign up here.</a></p>
              <p>Even if you don't have an E-residency card, you can still sign up in Foundik. But before
                proceeding to next step you need an E-Residency card. If you do not have the e-residency card, 
                we will not enter your company details to the estonian registry. Check out the E-Residency FAQs to know more.
              </p>
            </Text>
          </AccordionDetails>
        </Accordion>
        <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">What services will I get from Foundik?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
              <p>Foundik offers one stop services that are required to operate your business in Estonia in         
                a quick and efficient way and that includes:</p>
              <ul>
                <li>Banking Account (TransferWise)</li>
                <li>Monthly Sales & Expense Invoices</li>
                <li>Accounting Services</li>
                <li>Tax compliance and filing</li>
                <li>Community membership</li>
                <li>Contact person & address service</li>
                <li>24/7 Support</li>
              </ul>

              <p>
                <i><u>
                Note: Offered services may vary depending on your chosen plan. For more information, please&nbsp;
                <Link to="/pricing">see our plans</Link>. 
               </u></i>
              </p>
            </Text>
          </AccordionDetails>
        </Accordion>
      </div>

      <div id='#eresidency' sx={{ maxWidth: 'container', margin: 'auto', paddingY: '50px' }}>
        <Heading sx={{ fontSize: '32px', marginBottom: '50px'}}>2. E-Residency</Heading>

        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">What is E-Residency?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>E-residency is a digital identity issued by the government of 
            Estonia. It provides access to Estonia’s digital business market. With Estonia being a full member of the European 
            Union, opening a company in Estonia provides access to the EU market.
            </Text>
          </AccordionDetails>
        </Accordion>

        <Accordion TransitionProps={{ unmountOnExit: true }} >
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">How to become an E-Resident?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>Becoming an E-resident is easy. Anyone around the world can 
            apply to register their business in Estonia. To get started visit&nbsp;
            <a href={ERESIDENCY_URL}>here</a>.
            </Text>
          </AccordionDetails>
        </Accordion>

        <Accordion TransitionProps={{ unmountOnExit: true }} >
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">What documents do I need to apply for E-residency?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
              <ul>
                <li>Scanned copy of your travel document, preferably a passport</li>
                <li>One passport-styled photo on a white background</li>
                <li>Motivation letter why would you like to apply for e-residency</li>
                <li>CV(optional)</li>
                <li>Visa or mastercard (for fee payment)</li>
              </ul>
            </Text>
          </AccordionDetails>
        </Accordion>

        <Accordion TransitionProps={{ unmountOnExit: true }} >
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">How much time does it take to become an E-Resident?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
              <p>After you get acceptance, you need to get a card to your assigned Estonian embassy. 
                All together it takes about 30 business days.
              </p>

              <i><u>Note: Due to COVID-19 situations this might take longer than usual.</u></i>
            </Text>
          </AccordionDetails>
        </Accordion>

        <Accordion TransitionProps={{ unmountOnExit: true }} >
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">How much does it cost?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
            The issuance of the e-residence card costs 100€. Additionally, you will need to pay 20€ for the shipment to the assigned 
            Estonian embassy. You can also pick the card up in Tallinn and then you would not pay the shipping costs.
            </Text>
          </AccordionDetails>
        </Accordion>
      </div>

      <div sx={{ maxWidth: 'container', margin: 'auto', paddingY: '50px' }}>
        <Heading sx={{ fontSize: '32px', marginBottom: '50px'}}>3. Invoicing</Heading>

        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">How to send invoices?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
            First of all, to send invoices you need to have your company registered. Then, after you send the invoices to your 
            clients, you need to attach the invoices to the tables for taxation purposes. Our accountant will deduct your taxes 
            for you once you decide to share dividends - transfer to your personal account.
            </Text>
          </AccordionDetails>
        </Accordion>

        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">What if I don’t know how to create invoices and get them approved?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
            You can contact us at&nbsp;
            <a href={SUPPORT_EMAIL}>hello@foundik.com</a>
            &nbsp;for any questions you might have. Our accountant will help you with the 
            invoice preparation and approval in case you need help with that.
            </Text>
          </AccordionDetails>
        </Accordion>
      </div>

      <div sx={{ maxWidth: 'container', margin: 'auto', paddingY: '50px' }}>
        <Heading sx={{ fontSize: '32px', marginBottom: '50px'}}>4. Pricing</Heading>

        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">How much will I pay?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
            <p>
            For registering your company you need to pay an one time cost - 260€ which 
            covers your company registration fee and you'll also get a free trial month with Foundik as a BONUS.
            </p>

            <p>
            This will depend on the number of invoices that you will send in the current month:
            <ul>
              <li>If you send up to 10 sales invoices, we will charge you 129€.</li>
              <li>If you send between 10 and 25 sales invoices, we will charge you 159€.</li>
              <li>If you need to send more than 25 invoices, please contact us at 
                <a href={SUPPORT_EMAIL}>hello@foundik.com</a> and we will give you a customized pricing plan</li>
            </ul>
            </p>

            </Text>
          </AccordionDetails>
        </Accordion>

        <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary expandIcon={<FcExpand />}>
            <Heading as="h3">What if I don’t know how to create invoices and get them approved?</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Text sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
            You can contact us at&nbsp;
            <a href={SUPPORT_EMAIL}>hello@foundik.com</a>
            &nbsp;for any questions you might have. Our accountant will help you with the 
            invoice preparation and approval in case you need help with that.
            </Text>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}