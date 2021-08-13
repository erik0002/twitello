import './App.css';
import React from "react";
import AppHeader from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";
import PostStatusFilter from "./components/post-status-filter/post-status-filter";
import PostList from "./components/post-list/post-list";
import PostAddForm from "./components/post-add-form/post-add-form";

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <div>
            <PostList/>
        </div>
        <div>
            <PostAddForm/>
        </div>
    </div>
  );
}

export default App;
