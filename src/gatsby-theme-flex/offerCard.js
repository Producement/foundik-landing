/** @jsx jsx */
import { jsx, Text, Card, AspectImage } from 'theme-ui';

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

export const OfferCard = ({
  title,
  image,
  content
}) => {
  return (
    <Card sx={styles.card}>
      <div sx={{
        marginY: 5
      }}>
        <div sx={styles.cardImage}>
          <AspectImage ratio={1} src={image} />
        </div>
        <Text sx={{
          fontWeight: '500',
          fontSize: '18px',
          marginBottom: 5
        }}>
          {title}
        </Text>
        <Text
          sx={{
            fontWeight: '100',
            fontSize: '14px'
          }}
        >
          {content}
        </Text>
      </div>
    </Card>
  )
}