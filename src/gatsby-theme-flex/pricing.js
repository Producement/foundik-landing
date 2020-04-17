/** @jsx jsx */
import { jsx, Grid, Card, Heading, Text } from 'theme-ui';


export const Pricing = () => {
  return (
    <Grid
      columns={[1, null, null]}
    >
      <div
        sx={{
          //paddingX: '22rem',
          //paddingY: '7.5rem',
          marginTop: '5rem',
          border: '5px solid',
          position: 'relative',
          height: 300,
          width: 700
        }}
      >
        <Grid
          columns={[2, null, null]}
        >
          <div sx={{
            paddingX: '1rem',
            paddingY: '4rem'
          }}>
            <Heading as="h2"
              sx={{
                textAlign: 'center',
                marginY: 1
              }}
            >
              Only Requirements
            </Heading>
            <Text sx={{
              fontWeight: 100
            }}>
              <ul>
                <li>Estonian e-Residency</li>
                <li>Legal Physical Address</li>
              </ul>
            </Text>
          </div>
          <div>
            <Card
              sx={{
                bg: 'background',
                boxShadow: '6px 2px 3px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);',
                padding: 2,
                minHeight: '25.5rem',
                minWidth: '20rem',
                position: 'absolute',
                marginTop: '-4.5rem'
              }}
            >
              <div sx={{
                paddingY: '2rem'
              }}>
                <Heading as="h2"
                  sx={{
                    textAlign: 'center',
                    marginY: 1
                  }}
                >
                  Features
                </Heading>

                <Heading as="h1"
                  sx={{
                    //fontWeight: '500',
                    fontSize: 40,
                    textAlign: 'center',
                    color: 'primary',
                    marginY: 1
                  }}
                >
                  &euro;500
                </Heading>

                <Text sx={{
                  fontWeight: 100
                }}>
                  <ul>
                    <li>Entity registration</li>
                    <li>State fee (190€+25€ for API)</li>
                    <li>TW balance+card opening</li>
                    <li>Community membership</li>
                    <li>First month service fee</li>
                    <li>Contact person & address service</li>
                    <li>Tax compliance and filing</li>
                    <li>Sales invoices and collection</li>
                  </ul>
                </Text>
              </div>
            </Card>
          </div>
        </Grid>
      </div>
    </Grid>
  )
}