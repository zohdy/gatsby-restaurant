import React, { Component } from "react"
import styled from 'styled-components'
import { styles } from '../../../utils'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

class NavbarIcons extends Component {
  state = {
    icons: [
      { id: 1, icon: <FaFacebook className="icon icon-facebook" path='#' /> },
      { id: 2, icon: <FaTwitter className="icon icon-twitter" path='#' /> },
      { id: 3, icon: <FaInstagram className="icon icon-instagram" path='#' /> }
    ]
  }
  render() {
    return (
      <IconWrapper>
        { this.state.icons.map(item => {
          return (
            <a key={item.id} href={item.path}> {item.icon} </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()}
  }
  .icon-facebook {
    color: #3b579d;
  }
  .icon-twitter {
    color: #3ab7f0;
  }
  .icon-instagram {
    color: #da5f53;
  }
  .icon:hover {
     color:${styles.colors.mainYellow};
  }
  display: none;
  
  @media (min-width: 768px){
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons