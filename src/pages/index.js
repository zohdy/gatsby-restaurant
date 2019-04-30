import React from "react"
import Layout from "../components/layout"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from '../images/background/homeBcg.jpeg'
import QuickInfo from '../components/homePageComponents/Quickinfo'
import Gallery from "../components/homePageComponents/Gallery-1"

const IndexPage = () => (
  <Layout>
      <HomeHeader img={img}>
        <Banner title="Eatery" subtitle="55 Main Street - Santa Monica, CA">
          <BannerButton style={{margin:'2rem auto'}}>Menu</BannerButton>
        </Banner>
      </HomeHeader>
    <QuickInfo/>
    <Gallery/>
  </Layout>
)


export default IndexPage
