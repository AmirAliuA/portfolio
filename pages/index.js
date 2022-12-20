import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoMail } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Amir Aliu
          </Heading>
          <p>Full Stack Web Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/bruh.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Im a full-stack developer based in Kosovo with a passion for web & software development.
          Proficient in fundamental front-end languages and server-side languages. In-depth knowledge of MySQL and MongoDB. 
          </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Other Interests
        </Heading>
        <Paragraph>
          <Link href="https://linktr.ee/mili808" target="_blank">
            Music Production
          </Link>
          , Game Development,{' '}
          & UI Design
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/amiraliu/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @amiraliu
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:aaliu272@gmail.com" target="_blank">
              <Button
                variant="bruhbutton"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                aaliu272@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
