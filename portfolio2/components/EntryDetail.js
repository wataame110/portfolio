import styled from "styled-components"

const EntryContainer = styled.section`
  margin: 16px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 3px rgba(255,255,255,0.2);
  border-radius: 8px;
`

const EntryTitle = styled.h2`
  margin: 8px;
  background-color: #eee;
  padding: 8px;
  border-radius: 8px;
`

const EntryImg = styled.figure`
  & img {
    width: 100%;
  }
`

const EntryBody = styled.div`
  & h2 {
    padding: 16px;
    background-color: #333;
    color: #fff;
  }
  & img {
    width: 100%;
  }
  & h3 {
    padding: 16px;
    background-color: #333;
    color: #fff;
  }
  & p {
    margin: 16px;
  }
  & ul {
    margin: 16px;
  }
  & li {
    
  }
`

export default function Entry(props) {
  return (
    <EntryContainer>
      <EntryTitle>
        {props.entry.title}
      </EntryTitle>
      <EntryImg>
        <img src={props.entry.image?.url} alt="" />
      </EntryImg>
      <EntryBody dangerouslySetInnerHTML={{ __html: props.entry.body }} />
    </EntryContainer>
  )
}