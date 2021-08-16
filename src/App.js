import './App.module.scss';
import React from "react";
//import s from './App.module.scss';
import AppHeader from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";
import PostStatusFilter from "./components/post-status-filter/post-status-filter";
import PostList from "./components/post-list/post-list";
import PostAddForm from "./components/post-add-form/post-add-form";
import styled from "styled-components";

const AppBlock = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`

function App() {

    const data = [
        {label: "Going to learn react", important: true, id: 'ljfkbi'},
        {label: "That is so good", important: false, id: 'weter'},
        {label: "I need a break...", important: false, id: 'hfytrf'},
        {label: "I'm already eighteen))", important: false, id: 'kbitb'}
    ];

  return (
    <StyledAppBlock>
        <AppHeader/>
        <div className="d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    </StyledAppBlock>
  );
}

export default App;
