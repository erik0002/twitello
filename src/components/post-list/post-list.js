import React from 'react';
import s from './post-list.module.scss';
import PostListItem from '../post-list-item/post-list-item';
import cx from 'classnames';
import { ListGroup } from 'reactstrap';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item my-1 bg-light">
                <PostListItem {...itemProps}/>
            </li>
        )
    })

    return (
            <ListGroup className={cx(s.appList)}>
                {elements}
            </ListGroup>
    )
}

export default PostList
