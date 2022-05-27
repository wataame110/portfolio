import styled from "styled-components"
import Link from 'next/link'

const EntriesContainer = styled.div`
  max-width: 1080px;
  width: calc(100% - 16px);
  margin: 8px auto;
  display: flex;
  flex-flow: row wrap;
`

export default function Entries(props) {
  return (
    <EntriesContainer>
      {props.children}
    </EntriesContainer>
  )
}