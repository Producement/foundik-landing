/** @jsx jsx */
import { jsx, Grid, Heading } from 'theme-ui';
import { Slider } from '@material-ui/core';
import { PriceCard } from './priceCard';
import './schemes.css';

import { GiDirectorChair, GiFamilyHouse } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';
import { RiBuilding3Line } from 'react-icons/ri';
import { FaWarehouse, FaRegBuilding } from 'react-icons/fa';

const BaseStyles = {
  btn: {
    paddingX: '40px',
    paddingY: '10px'
  },
}

const styles = {
  btnLeftSharp: {
    paddingX: BaseStyles.btn.paddingX,
    paddingY: BaseStyles.btn.paddingY,
    borderRadius: '3px 0 0 3px'
  },
  btnSharp: {
    paddingX: BaseStyles.btn.paddingX,
    paddingY: BaseStyles.btn.paddingY,
    borderRadius: '0'
  },
  btnRightSharp: {
    paddingX: BaseStyles.btn.paddingX,
    paddingY: BaseStyles.btn.paddingY,
    borderRadius: '0 3px 3px 0'
  },
  cardIcon: {
    marginY: '25px'
  }
}

const marks = [{
  value: 0,
  label: '€0k',
},
{
  value: 1,
  label: '€3k',
},
{
  value: 2,
  label: '€10k',
},
{
  value: 3,
  label: '€20k',
},
{
  value: 4,
  label: '€100k',
},
{
  value: 5,
  label: '€150k+',
},
];

export const Schemes = () => {
  return (
    <section
      id="pricing"
      sx={{ textAlign: 'center' }}
    >
      <div sx={{ maxWidth: 'container', margin: 'auto' }}>
        <Heading sx={{ fontSize: '48px', marginY: '50px' }}>Pricing</Heading>
        <div>
          {/* <Grid columns={[1, null, 6]} gap={0} sx={{ marginY: '20px' }}>
            <Button sx={styles.btnLeftSharp}>€0k - €3k</Button>
            <Button sx={styles.btnSharp}>€3k - €10k</Button>
            <Button sx={styles.btnSharp}>€10k - €20k</Button>
            <Button sx={styles.btnSharp}>€20k - €100k</Button>
            <Button sx={styles.btnSharp}>€100k - €150k</Button>
            <Button sx={styles.btnRightSharp}>€150k+</Button>
          </Grid> */}
          <div sx={{ margin: '30px 10px' }}>
            <Slider
              defaultValue={2}
              max={5}
              marks={marks}
            ></Slider>
          </div>

          <Grid columns={[1, null, 3]} gap={10}>
            <PriceCard
              icon={<GiDirectorChair size={50} sx={styles.cardIcon} />}
              header='Starter'
              price='€129/m'
              footerText='Monthly expenses below €3k'
            />

            <PriceCard
              icon={<FaWarehouse size={50} sx={styles.cardIcon} />}
              header='Micro'
              price='$159/m'
              footerText='Monthly expenses more than €3k to €10k'
            />

            <PriceCard
              icon={<AiOutlineHome size={50} sx={styles.cardIcon} />}
              header='Boutique'
              price='$199/m'
              footerText='Monthly expenses more than €10k to €20k'
              disabled={true}
            />

            <PriceCard
              icon={<RiBuilding3Line size={50} sx={styles.cardIcon} />}
              header='Venture'
              price='1% of expenses/m'
              footerText='Monthly expenses more than €20k to €100k'
            />

            <PriceCard
              icon={<GiFamilyHouse size={50} sx={styles.cardIcon} />}
              header='Corporate'
              price='0,8% of expenses/m'
              footerText='Monthly expenses more than €100k to €150k'
            />

            <PriceCard
              icon={<FaRegBuilding size={50} sx={styles.cardIcon} />}
              header='Elite'
              price='0,6% of expenses/m'
              footerText='Monthly expenses more than €150k'
            />
          </Grid>
        </div>
      </div>
    </section>
  );
};