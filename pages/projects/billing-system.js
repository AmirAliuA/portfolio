import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Billing System">
    <Container>
      <Title>
        Billing System (C#) <Badge>2022</Badge>
      </Title>
      <P>
        A simple Billing System written for a University Assignment.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/AmirAliuA/billing-system">
          https://github.com/AmirAliuA/billing-system <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C# - Programming Language (Tier 3 Architecture), WPF, Microsoft SQL Server 2018</span>
        </ListItem>
      </List>

      <h1>Features</h1>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Users Module</Meta>
          <span>Manages all the Users (CRUD)</span>
        </ListItem>
        <ListItem>
          <Meta>Categories Module</Meta>
          <span>Manages all the Categories (CRUD)</span>
        </ListItem>
        <ListItem>
          <Meta>Products Module</Meta>
          <span>Manages all the Products (CRUD)</span>
        </ListItem>
        <ListItem>
          <Meta>Purchase and Sales Module</Meta>
          <span>Purchase Products from the Dealer and Sell Products to Consumers (CRUD)</span>
        </ListItem>
        <ListItem>
          <Meta>Transactions Module</Meta>
          <span>View the Purchased & Sold Product (CRUD)</span>
        </ListItem>
      </List>
      
      <WorkImage src="https://raw.githubusercontent.com/AmirAliuA/billing-system/master/Screenshots/login-dashboard.png" alt="Login Form" />
      <WorkImage src="https://raw.githubusercontent.com/AmirAliuA/billing-system/master/Screenshots/admin-dashboard.png" alt="Admin Dashboard" />
      <WorkImage src="https://raw.githubusercontent.com/AmirAliuA/billing-system/master/Screenshots/users-dashboard.png" alt="Users Dashboard" />
      <WorkImage src="https://raw.githubusercontent.com/AmirAliuA/billing-system/master/Screenshots/categories-dashboard.png" alt="Categories Dashboard" />
      <WorkImage src="https://raw.githubusercontent.com/AmirAliuA/billing-system/master/Screenshots/products-dashboard.PNG" alt="Products Dashboard" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
