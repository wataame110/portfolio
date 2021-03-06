import styled from "styled-components"
import Link from 'next/link'

const HeaderContainer = styled.header`
  color: #fff;
  background-color: #333;
`

const HeaderTitle = styled.h1`
  padding: 16px;
  margin: 0;
  font-size: 28px;
`

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <Link href={`/`}>
        Portfolio
        </Link>
      </HeaderTitle>
    </HeaderContainer>
  )
}