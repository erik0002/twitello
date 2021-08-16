import React from 'react';
//import s from './header.module.scss';
//import cx from 'classnames';
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'black'}
    :hover {
      color: burlywood;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = () => {
    return (
        <Header as='a'>
            <h1>Yeliazar Kazhura</h1>
            <h2>5 notes, liked 3</h2>
        </Header>
    )
}

export default AppHeader
