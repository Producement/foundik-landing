/** @jsx jsx */
import { jsx, Heading, Card, Text, Button } from 'theme-ui';
import { css } from '@emotion/core';

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
  primaryCard: {
    ...BaseStyles.card,
    backgroundColor: '#316099',
    color: '#fff'
  },
  cardImage: {
    textAlign: 'center'
  }
}



export const Plan = (props) => {
  const {name, price, subtitle, features, primary, buttonLabel} = props;
  return (
    <Card sx={primary ? styles.primaryCard : styles.card} css={css`
          &:hover {
            background-color: #316099;
            color: #fff;
          }
        `}>
      <div sx={{ borderBottom: '1px solid', paddingBottom: '5' }}>
        <Heading as="h4">{name}</Heading>
        <Heading as="h2">&euro; <span sx={{ fontSize: '64px' }}>{price}</span>/month</Heading>
        <Text sx={{ fontSize: 'small' }}>{subtitle}</Text>
        <Button sx={{ mt: '5' }}>{buttonLabel ? buttonLabel : "Subscribe"}</Button>
      </div>
      <div sx={{ paddingTop: '3' }}>
        <Text>Includes:</Text>
        <ul sx={{ textAlign: 'left', fontWeight: 'lighter' }}>
          {
            features && features.map((value, index) => <li key={index}>{value}</li>)
          }
        </ul>
      </div>
    </Card>
  )
}