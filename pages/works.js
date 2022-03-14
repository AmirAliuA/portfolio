import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import billingsystemImage from '../public/images/works/admin-dashboard.png'
import thumbWalknote from '../public/images/works/loginform.png'
import arduinoImage from '../public/images/works/arduino.png'
import snapchatUsernamesImages from '../public/images/works/su-start.png'
import eCommerceImage from '../public/images/works/eCommerceImage.png'
import covidDashboardJavaImage from '../public/images/works/covidDashboardJava.png'

const Works = () => (
  <Layout title="Portfolio">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Software
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="billingsystem" title="Billing System (C#)" thumbnail={billingsystemImage}>
          A simple Billing System written for a University Assignment
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="covid-java" thumbnail={covidDashboardJavaImage} title="Covid Dashboard (Java)">
            A program that shows the Covid Records 
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="loginform"
            title="Login Form (C#)"
            thumbnail={thumbWalknote}
          >
            A simple login form written for a University Assignment
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="arduino-project"
            title="Arduino Project (C++)"
            thumbnail={arduinoImage}
          >
            A very basic project in Arduino for a University Assignment.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="snapchat-usernames" thumbnail={snapchatUsernamesImages} title="Snapchat Usernames (Python)">
            A python script to check if snapchat usernames are available or not. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Websites
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="ecommerce"
            thumbnail={eCommerceImage}
            title="eCommerce Website Application (Next.JS)"
          >
            An eCommerce Website Application
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
