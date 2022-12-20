import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Amir Aliu's Portfolio" />
        <meta name="author" content="Amir Aliu" />
        <meta name="author" content="amiraliu" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Amir Aliu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@amiraliu__" />
        <meta name="twitter:creator" content="@amiraliu__" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Amir Aliu" />
        <meta name="og:title" content="Amir Aliu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.amiraliu.vercel.app/card.png" />
        <title>Amir Aliu - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
