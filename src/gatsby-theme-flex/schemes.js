/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { makeStyles, withStyles, createStyles, Paper, Tabs, Tab } from '@material-ui/core';
import { PriceCard } from './priceCard';
import { css } from '@emotion/core';

import Starter from '../images/packages/starter.svg';
import Boutique from '../images/packages/boutique.svg';
import Micro from '../images/packages/micro.svg';
import Corporate from '../images/packages/corporate.svg';
import Elite from '../images/packages/elite.svg';
import Venture from '../images/packages/venture.svg';

import { useState } from 'react';


const marks = [
  {
    value: 0,
    label: '€0k - €3k',
  },
  {
    value: 1,
    label: '€3k - €10k',
  },
  {
    value: 2,
    label: '€10k - €20k',
  },
  {
    value: 3,
    label: '€20k - €100k',
  },
  {
    value: 4,
    label: '€100k - €150k',
  },
  {
    value: 5,
    label: '€150k+',
  }
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
        price='€159/m'
        footerText='Monthly expenses more than €3k to €10k'
      />
  },
  {
    key: 2,
    value:
      <PriceCard
        icon={Boutique}
        header='Boutique'
        price='€199/m'
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

const useStyles = makeStyles({
  root: {
    backgroundColor: '#EFF6FC',
  },
});

const CustomizedTabs = withStyles({
  root: {
    borderBottom: 'none',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const CustomizedTab = withStyles((theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      marginRight: theme.spacing(4),
      color: '#333333',
      fontFamily: [
        'system-ui',
        'sans-serif',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        color: '#1894EC',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {
      borderBottomColor: 'transparent'
    },
  }),
)((props) => <Tab disableRipple {...props} />);


export const Schemes = () => {

  const classes = useStyles();
  const [selectedCard, setSelectedCard] = useState(0);

  const handleChange = (event, value) => {
    setSelectedCard(value);
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
        <Paper
          className={classes.root}
          sx={{
            width: ['100%', '100%'],
            maxWidth: 'container',
            margin: 'auto',
            borderRadius: '8px',
            paddingY: '5px'
          }}>
          <CustomizedTabs
            value={selectedCard}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {
              marks && marks.map(item => <CustomizedTab key={item.value} label={item.label} />)
            }
          </CustomizedTabs>
        </Paper>
      </div>
      <div sx={{ maxWidth: 'container', margin: 'auto' }}>
        <div sx={{width: '310px', height: '310px', margin: 'auto'}}>{priceCards[selectedCard].value}</div>
      </div>
    </section>
  );
};