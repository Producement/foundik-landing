/** @jsx jsx */
import { jsx, Card, Heading, Text, Button } from 'theme-ui';
import { useEffect } from 'react';
import { useState } from 'react';


const BaseStyles = {
  card: { 
    textAlign: 'center', 
    //backgroundColor: 'default', 
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)' 
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
    fontSize: 'small'
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
    if(disabled)
      setBgColor('darkgrey');
  }, [disabled]);

  return (
    <Card sx={styles.card} style={{backgroundColor: {bgColor}}}>
      {icon}

      <Heading as='h5' sx={styles.cardHeader}>{header}</Heading>

      <Text sx={styles.cardPrice}>{price}</Text>

      <div sx={styles.cardButton}>
        <Button sx={{ fontSize: 'small' }} disabled={disabled}>Proceed</Button>
      </div>

      <Text sx={styles.cardFooter}>
        {footerText}
      </Text>
    </Card>
  );
};