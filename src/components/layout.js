import React from "react"
import Navbar from '../components/globals/navbar/Navbar'
import { createGlobalStyle } from 'styled-components'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      { children }
    </React.Fragment>
  )
}

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color: #262626;
  background: #fff;
}
`

export default Layout
