import styled from "styled-components"

const FooterContainer = styled.footer`
  color: #fff;
  background-color: #333;
`

const Copyright = styled.p`
  padding: 16px;
  margin: 0;
  font-size: 16px;
  text-align: center;
`

export default function Footer(props) {
  return (
    <FooterContainer>
      <Copyright><small>&copy; kamem</small></Copyright>
    </FooterContainer>
  )
}