import styled from "styled-components"
import Link from 'next/link'

const EntryContainer = styled.section`
  margin: 8px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 3px rgba(255,255,255,0.2);
  border-radius: 4px;
  width: calc(100% / 3 - (8 * 2px));
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  & a {
    flex-grow: 1;
    transition: opacity 0.2s ease-in;

    &:hover {
      opacity: 0.7;
    }
  }
`

const EntryTitle = styled.h2`
  margin: 0;
  background-color: #eee;
  padding: 8px;
  font-size: 16px;
  color: #333;
  line-height: 1.8;
`

const EntryImg = styled.figure`
  & img {
    width: 100%;
  }
`

export default function Entry(props) {
  return (
    <EntryContainer>
      <Link href={`/entry/${props.entry.id}`}>
        <a>
        <EntryTitle>
              {props.entry.title}
        </EntryTitle>
        <EntryImg>
          <img src={props.entry.image?.url} alt="" />
        </EntryImg>
        </a>
      </Link>
    </EntryContainer>
  )
}