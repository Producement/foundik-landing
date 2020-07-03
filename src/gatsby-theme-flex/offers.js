/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import OfferEUCompany from '../images/OfferEUCompany.svg';
import OfferBankingAccount from '../images/OfferBankingAccount.svg';
import OfferAccounting from '../images/OfferAccounting.svg';
import { OfferCard } from './offerCard';

export const Offers = () => {
  return (
    <Grid
      columns={[1, 3, 3]}
      gap={10}
      sx={{ marginTop: 64 }}
    >
      <OfferCard
        title='EU Company'
        image={OfferEUCompany}
        content={<div>Foundik offers you an <span sx={{ fontWeight: '500', color: 'primary' }}>EU regulated company</span>
        (Estonian private limited company - OÜ) that can be managed
        100% online and anywhere in the world</div>}
      />

      <OfferCard
        title='Banking Account'
        image={OfferBankingAccount}
        content={<div>You can integrate a new TransferWise account to your business who also
          <span sx={{ fontWeight: '500', color: 'primary' }}> issue a Debit Mastercard </span>
          for your business transactions - all that 100% online</div>}
      />

      <OfferCard
        title='Accounting'
        image={OfferAccounting}
        content={<div>We will be taking care of your whole business’s
          <span sx={{ fontWeight: '500', color: 'primary' }}> accountancy - taxes, invoices</span>.</div>}
      />
    </Grid>
  );
}