/** @jsx jsx */
import {jsx, Heading, Card, Text, Button} from 'theme-ui';
import check from "../../images/check.svg";
import { css } from '@emotion/core';
import {SUPPORT_EMAIL} from "../../constants";

const BaseStyles = {
  card: {
    backgroundColor: 'default',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    borderRadius: '5px',
    padding: '30px',
    textAlign: 'center'
  },
  cardChildren: {
    marginY: '10px'
  }
};

const styles = {
  cardPrimary: {
    ...BaseStyles.card,
    borderStyle: 'solid',
    borderColor: 'primary',
    borderWidth: '10px 0 0 0'
  },
  cardSecondary: {
    ...BaseStyles.card,
    borderStyle: 'solid',
    borderColor: 'secondary',
    borderWidth: '10px 0 0 0'
  },
  cardImage: {
    textAlign: 'center'
  }
};


export const Plan = (props) => {
  const {name, price, subtitle, features, isCustomPlan} = props;
  return (
    <Card sx={styles.cardPrimary}>
      <div sx={{ paddingBottom: '5' }}>
        <Heading as="h4" paddingTop={'20px'}>{name}</Heading>
        <Heading as="h2" paddingTop={'5px'}>&euro; <span sx={{ fontSize: '48px' }}>{price}</span>/month</Heading>
        <Text sx={{ fontSize: '18px', fontWeight: 'lighter' }}>{subtitle}</Text>
      </div>
      <div sx={{ paddingTop: '3' }}>
        <div sx={{ textAlign: 'left' }}>
          {
            features && features.map((value, index) =>
                <div key={index}>
                  <img src={check} sx={{ marginRight: '15px' }} alt={'loading'} />
                  <span>{value}</span>
                </div>)
          }
          {isCustomPlan && (
            <div>
              <a href= {SUPPORT_EMAIL}
                 target={'_blank'}
                 css={css`
                text-decoration: none;
                &:hover {
                  text-decoration: none !important; 
                }
              `}
              >
              <Button sx={{ mt: '5', width: '100%', alignContent: `center`, textAlign: `center`, fontWeight: 'bold'}}>
                Ask for a quote
              </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}