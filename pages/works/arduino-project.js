import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Arduino Project">
    <Container>
      <Title>
        Arduino Project <Badge>2021</Badge>
      </Title>
      <P>
        A very basic traffic light project in Arduino Uno for a University Assignment.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Arduino Uno</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, Arduino Uno</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/AmirAliuA/Basic-Arduino-Traffic-Light">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={0} gap={2}>
        <WorkImage src="https://camo.githubusercontent.com/0c98674b825a9dce9991f1cf1341f0e39d92fc5968b048ffdd8d098d91c8f219/68747470733a2f2f692e696d6775722e636f6d2f515644324c65762e706e67" alt="arduinoproject" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
