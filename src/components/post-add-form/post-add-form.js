import React from 'react'
import s from './post-add-form.module.css';
import cx from 'classnames';

const PostAddForm = () => {
    return (
        <form className={cx(s.bottomPanel, 'd-flex')}>
            <input
                type="text"
                placeholder="What are you thinking about now?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Add Post
            </button>
        </form>
    )
}

export default PostAddForm
