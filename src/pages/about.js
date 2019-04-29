import React from "react"
import Layout from "../components/layout"
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/background/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <PageHeader img={aboutImg}>
      <Banner title="About us" subtitle="A Little About Us" />
    </PageHeader>
  </Layout>
)

export default AboutPage;