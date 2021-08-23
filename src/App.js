import './App.module.scss';
import React, {Component} from "react";
//import s from './App.module.scss';
import AppHeader from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";
import PostStatusFilter from "./components/post-status-filter/post-status-filter";
import PostList from "./components/post-list/post-list";
import PostAddForm from "./components/post-add-form/post-add-form";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const AppBlock = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    //background-color: grey;
`

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn react", important: true, like: true, id: 1},
                {label: "That is so good", important: false, like: false,  id: 2},
                {label: "I need a break...", important: false, like: true, id: 3},
                {label: "I'm already eighteen))", important: false, like: false, id: 4}
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: uuidv4()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    render() {
        const {data} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPost = data.length;

        return (
            <StyledAppBlock>
                <AppHeader
                    liked={liked}
                    allPost={allPost}
                />
                <div className="d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <div>
                    <PostList
                        posts={this.state.data}
                        onDelete={ this.deleteItem }
                        onToggleImportant={this.onToggleImportant}
                        onToggleLiked={this.onToggleLiked}
                    />
                    <PostAddForm
                        onAdd={ this.addItem }
                    />
                </div>
            </StyledAppBlock>
        );
    }
}
