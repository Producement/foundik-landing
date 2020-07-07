/** @jsx jsx */
import { jsx, Card, Heading, Text, Button } from 'theme-ui';
import { useEffect } from 'react';
import { useState } from 'react';


const BaseStyles = {
  card: {
    textAlign: 'center',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    padding: '15px'
  },
  cardChildren: {
    marginY: '10px'
  }
}

const styles = {
  card: {
    ...BaseStyles.card
  },
  cardIcon: {
    marginY: '25px'
  },
  cardHeader: {
    ...BaseStyles.cardChildren
  },
  cardPrice: {
    ...BaseStyles.cardChildren,
    fontSize: 'large'
  },
  cardButton: {
    ...BaseStyles.cardChildren
  },
  cardFooter: {
    ...BaseStyles.cardChildren,
    fontSize: 'small',
    color: '#BDBDBD'
  }

}

export const PriceCard = ({
  icon,
  header,
  price,
  disabled,
  footerText
}) => {
  const [bgColor, setBgColor] = useState('#fff');

  useEffect(() => {
    if (disabled)
      setBgColor('darkgrey');
  }, [disabled]);

  return (
    <Card sx={styles.card} style={{ backgroundColor: { bgColor } }}>
      <img src={icon} alt='' />

      <Heading as='h5' sx={styles.cardHeader}>{header}</Heading>

      <Text sx={styles.cardPrice}>{price}</Text>

      <div sx={styles.cardButton}>
        <Button sx={{ fontSize: 'small', width: '60%' }} disabled={disabled}>
          <div sx={{ margin: 'auto' }}>Proceed</div>
        </Button>
      </div>

      <Text sx={styles.cardFooter}>
        {footerText}
      </Text>
    </Card>
  );
};