/** @jsx jsx */
import { jsx, Grid, Heading } from 'theme-ui';
import { Slider, withStyles } from '@material-ui/core';
import { PriceCard } from './priceCard';
import { css } from '@emotion/core';

import Starter from '../images/packages/starter.svg';
import Boutique from '../images/packages/boutique.svg';
import Micro from '../images/packages/micro.svg';
import Corporate from '../images/packages/corporate.svg';
import Elite from '../images/packages/elite.svg';
import Venture from '../images/packages/venture.svg';

import { useState } from 'react';

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

const marks = [
  {
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
    label: '€150k',
  },
  {
    value: 6,
    label: '€150k+',
  },
];

const priceCards = [
  {
    key: 0,
    value:
      <PriceCard
        icon={Starter}
        header='Starter'
        price='€129/m'
        footerText='Monthly expenses below €3k'
      />
  },
  {
    key: 1,
    value:
      <PriceCard
        icon={Micro}
        header='Micro'
        price='$159/m'
        footerText='Monthly expenses more than €3k to €10k'
      />
  },
  {
    key: 2,
    value:
      <PriceCard
        icon={Boutique}
        header='Boutique'
        price='$199/m'
        footerText='Monthly expenses more than €10k to €20k'
        disabled={true}
      />
  },
  {
    key: 3,
    value:
      <PriceCard
        icon={Venture}
        header='Venture'
        price='1% of expenses/m'
        footerText='Monthly expenses more than €20k to €100k'
      />
  },
  {
    key: 4,
    value:
      <PriceCard
        icon={Corporate}
        header='Corporate'
        price='0,8% of expenses/m'
        footerText='Monthly expenses more than €100k to €150k'
      />
  },
  {
    key: 5,
    value:
      <PriceCard
        icon={Elite}
        header='Elite'
        price='0,6% of expenses/m'
        footerText='Monthly expenses more than €150k'
      />
  }
];

const PrettoSlider = withStyles({
  root: {
    color: '#07c',
    height: 5
  },
  thumb: {
    backgroundColor: '#fff',
    height: 15,
    width: 15,
    border: '2px solid currentColor',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  mark: {
    color: '#fff'
  },
  markLabel: {
    color: '#fff'
  },
  track: {
    borderRadius: 4,
    height: 5
  },
  rail: {
    borderRadius: 4,
    color: '#ffffff',
    height: 5
  },
})(Slider);

export const Schemes = () => {

  const [selectedPriceCards, setSelectedPriceCards] = useState(priceCards.slice(0, 1));

  const handleSliderChange = (event, value) => {
    setSelectedPriceCards(priceCards.filter(card => card.key >= value[0] && card.key < value[1]));
  };

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
          paddingY: '15px',
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
        <Heading sx={{ fontSize: '48px', marginY: '50px', color: '#fff' }}>Pricing</Heading>
        <div sx={{ margin: 'auto', maxWidth: 'container' }}>
          <PrettoSlider
            defaultValue={[0, 1]}
            max={6}
            marks={marks}
            onChange={handleSliderChange}
          ></PrettoSlider>
        </div>
      </div>
      <div sx={{ maxWidth: 'container', margin: 'auto' }}>
        <Grid columns={[1, null, 3]} gap={10}>
          {selectedPriceCards && selectedPriceCards.map(card => <div key={card.key}>{card.value}</div>)}
          {/* <PriceCard
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
            /> */}
        </Grid>
      </div>
    </section>
  );
};