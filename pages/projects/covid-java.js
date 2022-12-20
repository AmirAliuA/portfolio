import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="COVID Dashboard JAVA">
    <Container>
      <Title>
        Covid Dashboard Java <Badge>2022</Badge>
      </Title>
      <P>
        A COVID Dashboard implemented in Java & Spring Boot.
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

      <WorkImage src="/images/projects/covidJava.png" alt="coviddashboardjava" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
