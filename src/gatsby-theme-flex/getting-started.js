/** @jsx jsx */
import {jsx, Container, Grid, Text, Card, Heading} from 'theme-ui';
import {FaIdCard} from "react-icons/fa";
import {FaBriefcase} from "react-icons/fa";
import {FaFileInvoiceDollar} from "react-icons/fa";
import {FaTelegramPlane} from "react-icons/fa";
import {FaFileSignature} from "react-icons/fa";

export const GettingStarted = () => {
  return (

    <section>
      <Container>
        <Grid columns={[1, null, null]}>
          <div>
            <Text sx={{
              textAlign: `center`,
              fontSize: 5
            }}>
              With Foundik, your company can be set up within <span sx={{
              color: `primary`,
              fontWeight: `bold`
            }}>days</span>. We help with all the paperwork.
            </Text>
          </div>
        </Grid>

        <Grid columns={[1, '5fr 5fr 5fr 5fr 5fr']} gap={5} sx={{
          paddingY: '3rem',
          textAlign: 'center'

        }}>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              minWidth: '10rem',
              maxHeight: '20rem'
            }}>
              <Heading as="h4" sx={{
                marginY: 1,
                height: '2.5rem',
              }}>
                Become an e-resident
              </Heading>
              <Text sx={{
                textAlign: 'center',
                fontSize: 70
              }}>
                <FaIdCard/>
              </Text>
            </Card>
          </div>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              minWidth: '10rem',
            }}>
              <Heading as="h4" sx={{
                marginY: 1,
                height: '2.5rem'
              }}>
                Submit your online application.
              </Heading>
              <Text sx={{
                textAlign: 'center',
                fontSize: 70
              }}>
                <FaTelegramPlane/>
              </Text>
            </Card>
          </div>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              maxHeight: '17rem',
              minWidth: '10rem',
            }}>
              <Heading as="h4" sx={{
                marginY: 1,
                height: '2.5rem'
              }}>
                Sign the company formation documents
              </Heading>
              <Text sx={{
                textAlign: 'center',
                fontSize: 70
              }}>
                <FaFileSignature/>
              </Text>
            </Card>
          </div>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              minWidth: '10rem',
            }}>
              <Heading as="h4" sx={{
                marginY: 1,
                height: '2.5rem'
              }}>
                Your company is formed in Estonia.
              </Heading>
              <Text sx={{
                textAlign: 'center',
                fontSize: 70
              }}>
                <FaBriefcase/>
              </Text>
            </Card>
          </div>
          <div>
            <Card sx={{
              padding: 2,
              minHeight: '5rem',
              minWidth: '10rem',
            }}>
              <Heading as="h4" sx={{
                marginY: 1,
                height: '2.5rem'
              }}>
                Receive a tax ID number from the IRS
              </Heading>
              <Text sx={{
                textAlign: 'center',
                fontSize: 70
              }}>
                <FaFileInvoiceDollar/>
              </Text>
            </Card>
          </div>
        </Grid>
      </Container>
    </section>
  )
}