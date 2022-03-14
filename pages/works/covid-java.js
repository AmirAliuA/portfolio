import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="COVID Dashboard JAVA">
    <Container>
      <Title>
        Covid Dashboard Java <Badge>2022</Badge>
      </Title>
      <P>
        walknote recommends new music you may like based on your music
        preferences by recognizing your favorite songs stored in your device.
        You can listen to recommended music just like a radio!
      </P>
      <P>
        This service has been closed. Thank you for over 130,000 registered
        users!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/AmirAliuA/covid-dashboard-java">
            Github{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Spring Boot</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/covidDashboardJava.PNG" alt="coviddashboardjava" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
