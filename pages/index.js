import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5'
import portfolioImage from '../public/images/portfolio.png'
import resumeImage from '../public/images/resume.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hi 👋, I&apos;m a full-stack developer based in Kosovo!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Amir Aliu
          </Heading>
          <p>Full Stack Web Developer <br />(Music Producer / Indie Game Development Enthusiast)</p>
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
            overflow='hidden'
          >
            <ProfileImage
              src="/images/cropped.jpg"
              alt="Profile image"
              width="80%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          Im a full-stack developer based in Kosovo with a
          passion for web &amp; software development. Proficient in fundamental 
          front-end languages and server-side languages. 
          In-depth knowledge of MySQL and MongoDB. Skillful creating servers and databases for 
          functionality and designing and developing APIs.{' '}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What Im passionate about
        </Heading>
        <Paragraph>
          <Link href="https://www.youtube.com/channel/UCi0-2LQrPe5crJaDe3QNiiw" target="_blank">
            Music Production
          </Link>,
          Web Development, Software Development, UI/UX Design, Game Development
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
                leftIcon={<IoLogoLinkedin />}
              >
                @amiraliu
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/AmirAliuA" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @AmirAliuA
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:aaliu272@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailOutline />}
              >
                E-Mail
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/works"
            title="Portfolio"
            thumbnail={portfolioImage}
            scroll={false}
            target="_self"
          >
            Take a look at some of my work
          </GridItem>
          
          <GridItem
            href="./amir_aliu_resume.pdf"
            title="Resume"
            thumbnail={resumeImage}
          >
            View my resume
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
