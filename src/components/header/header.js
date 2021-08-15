import React from 'react';
import s from './header.module.scss';
import cx from 'classnames';

const AppHeader = () => {
    return (
        <div className={cx("d-flex", s.appHeader)}>
            <h1>Yeliazar Kazhura</h1>
            <h2>5 notes, liked 3</h2>
        </div>
    )
}

export default AppHeader
