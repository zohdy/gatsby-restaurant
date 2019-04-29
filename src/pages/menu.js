import React from "react"
import Layout from "../components/layout"
import { PageHeader, Banner } from '../utils'
import menuImg from '../images/background/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <PageHeader img={menuImg}>
      <Banner title="Menu" subtitle={`Let's dig in`}/>
    </PageHeader>
  </Layout>
)

export default MenuPage;