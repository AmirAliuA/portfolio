import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Snapchat Usernames">
    <Container>
      <Title>
        Snapchat Usernames <Badge>2020</Badge>
      </Title>
      <P>
       A python script to check if snapchat usernames are available or not. 
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python 3, Requests, PySimpleGUI</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/AmirAliuA/snapchat-username">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/su-start.png" alt="start" />
      <WorkImage src="/images/projects/su-result.png" alt="result" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
