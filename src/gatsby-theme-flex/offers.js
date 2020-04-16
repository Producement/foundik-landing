/** @jsx jsx */
import { jsx, Grid, Heading, Text } from 'theme-ui';

export const Offers = () => {
  return (
    <Grid
      columns={[1, 3, 3]}
      gap={10}
    >
      <div sx={{
        marginY: 5
      }}>
        <Heading as="h2" sx={{
          fontWeight: '500',
          textAlign: 'center',
          marginY: 5
        }}>
          EU COMPANY
        </Heading>
        <Text
          sx={{
            fontWeight: '100',
            fontSize: 'normal'
          }}
        >
          Foundik offers you an <span sx={{ fontWeight: '500' }}>EU regulated company</span> (Estonian private limited company - OÜ) that can be managed 
          100% online and anywhere in the world
        </Text>
      </div>
      <div sx={{
        marginY: 5
      }}>
        <Heading as="h2" sx={{
          fontWeight: '500',
          textAlign: 'center',
          marginY: 5
        }}>
          Banking Account
        </Heading>
        <Text
          sx={{
            fontWeight: '100',
            fontSize: 'normal'
          }}
        >
          You can integrate a new TransferWise account to your business who also
          <span sx={{ fontWeight: '500' }}> issue a Debit Mastercard </span> 
          for your business transactions - all that 100% online
        </Text>
      </div>
      <div sx={{
        marginY: 5
      }}>
        <Heading as="h2" sx={{
          fontWeight: '500',
          textAlign: 'center',
          marginY: 5
        }}>
          Accounting
        </Heading>
        <Text
          sx={{
            fontWeight: '100',
            fontSize: 'normal'
          }}
        >
          We will be taking care of your whole business’s 
          <span sx={{ fontWeight: '500' }}> accountancy - taxes, invoices</span>.
        </Text>
      </div>
    </Grid>
  );
}