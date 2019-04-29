import React from "react"
import Layout from "../components/layout"
import { PageHeader, Banner } from '../utils'
import contactImg from '../images/background/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <PageHeader img={contactImg}>
      <Banner title="Contact Us" subtitle={`Let's get in touch`}/>
    </PageHeader>
  </Layout>
)

export default ContactPage;