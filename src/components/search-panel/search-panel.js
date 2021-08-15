import React from 'react'
import s from './search-panel.module.css';
import cx from 'classnames';

const SearchPanel = () => {
    return (
        <div className={s.searchPanel}>
            <input
                className={cx("form-control", s.searchInput)}
                type="text"
                placeholder="Search..."
            />
        </div>
    )
}

export default SearchPanel

