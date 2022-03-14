import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="eCommerce Web Application">
    <Container>
      <Title>
        eCommerce Web Application <Badge>2021</Badge>
      </Title>
      <P>
        I was the lead developer/group leader of our group in our Programming Bootcamp in University.
        I dealt with front-end &amp; back-end development also with designing our assets.
      </P>
      <p>
        We reached the maximum score possible and the screenshot is down below.
      </p>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Node.js</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.JS, MongoDB, PayPal</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      {/* <Link href="https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf"> */}
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Responsive Design</Meta>
            Responsive on any device;
        </ListItem>
        <ListItem>
          <Meta>User System</Meta>
            Login / Logout;
        </ListItem>
        <ListItem>
          <Meta>Search Bar</Meta>
            Search bar for products;
        </ListItem>
        <ListItem>
          <Meta>Sorting / filtering</Meta>
            by category / price / brand / ratings;
        </ListItem>
        <ListItem>
          <Meta>Purchasing products</Meta>
            with more than one quantity;
        </ListItem>
        <ListItem>
          <Meta>Checkout / Order;</Meta>
            With cookies saving information
        </ListItem>
        <ListItem>
          <Meta>Order Info</Meta>
            Ability to see your orders and if they have been sent (shipping);
        </ListItem>
        <ListItem>
          <Meta>User Cookies</Meta>
            Saves the dark mode parameter, checkout info etc;
        </ListItem>
        <ListItem>
          <Meta>Dark Mode</Meta>
            Change the theme to light/dark mode;
        </ListItem>
        <ListItem>
          <Meta>Administrator</Meta>
            Administrators have the ability to add / edit products (s) or users (s);
        </ListItem>
        <ListItem>
          <Meta>Administrator</Meta>
          Administrators have the opportunity to see how many products are in total, how many products (and who) are sold, how many users the site has; 
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={0}>
        <iframe
          src="../../powerpoint-presentation.pdf"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />

        <iframe
          src="../../ecommerce-word.pdf"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </SimpleGrid>

      <SimpleGrid columns={0} gap={0}>
        <iframe
            src="https://i.gyazo.com/20968246577558130d1c993f9b1b1a4c.mp4"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
        />
      </SimpleGrid>

      <SimpleGrid columns={1} gap={0}>
        <WorkImage src="/images/works/products-main-screen.png" alt="productsmainscreen" />
        <WorkImage src="/images/works/products-screen.png" alt="productsscreen" />
        <WorkImage src="/images/works/home.png" alt="homescreen" />
      </SimpleGrid>

      <SimpleGrid columns={0} gap={0}>
        <WorkImage src="/images/works/eCommerce-logo.png" alt="logo" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
