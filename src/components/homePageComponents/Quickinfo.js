import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from 'styled-components'
import {Link} from 'gatsby'
import { styles } from '../../utils'

class Quickinfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let us tell you" title="our mission"> </Title>
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur cum cumque doloremque eius eos et eveniet expedita explicabo facere illo ipsa laboriosam magni mollitia nemo officia pariatur perspiciatis quasi ratione repellat, ullam veritatis voluptatibus voluptatum! Ab alias aliquid, culpa, deserunt laboriosam nobis obcaecati optio provident quam totam veniam voluptatibus.
          </p>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <SectionButton style={{ margin: '2rem auto'}}>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}
const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text{
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px){
    width: 70%;
  }
  @media (min-width: 992px){
    width: 60%;
  }
`

export default Quickinfo