import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Login Form">
    <Container>
      <Title>
        Login Form <Badge>2021</Badge>
      </Title>
      <P>
        A simple login form written for a University Assignment that shows the users on a dashbaord
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Microsoft SQL Server 2019</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/AmirAliuA/loginform_amiraliu">
            Github{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      {/*<Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}

      <WorkImage
        src="https://camo.githubusercontent.com/1762eca1ab59fb6882c3a59b3ddc1ca6c269a1e62e5271813bb218a4ba57942e/68747470733a2f2f692e696d6775722e636f6d2f5241566e7a76512e706e67"
        alt="login"
      />
      <WorkImage src="https://camo.githubusercontent.com/92fca599bc34158d7fd5ea99c7aeea2713962d37feda5eff96d4aeddf0ef090e/68747470733a2f2f692e696d6775722e636f6d2f714f636c7072612e706e67" alt="wrongpassword" />
      <WorkImage src="https://camo.githubusercontent.com/cba0eebe565afec92fdeee365a1fd63f40a7ed526563b273a247c173d8edf72b/68747470733a2f2f692e696d6775722e636f6d2f793156624d52782e706e67" alt="dashboard" />
      <WorkImage src="https://camo.githubusercontent.com/cf4115c373834b04a19e50752e7126917c24d04540eec3eb292fbad745f1ab3c/68747470733a2f2f692e696d6775722e636f6d2f6d337a366c7a562e706e67" alt="fetchusers" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
