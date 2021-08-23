import React, {Component} from 'react';
import s from './post-list-item.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faHeart, faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-free/css/all.css"

export default class PostListItem extends Component {



    render () {

        const {label, onDelete, onToggleLiked, onToggleImportant, important, like} = this.props;

        let classNames = `${s.appListItem} d-flex justify-content-between`;

        if(important) {
            classNames += ` ${s.appListItemImportant}`;
        }

        if(like) {
            classNames += ` ${s.liked}`;
        }

        return (
            <div className={classNames}>
                <span
                    className={s.appListItemLabel}
                >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className={`${s.btnStar} btn-sm`}
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"/>
                    </button>
                    <button
                        type="button"
                        className={`${s.btnTrash} btn-sm`}
                        onClick={onDelete}
                    >
                        <i className="fa fa-trash-alt"/>
                    </button>
                    <button
                        type="button"
                        className={`${s.faHeart} btn-sm`}
                        onClick={onToggleLiked}
                    >
                        <i className="fa fa-heart"/>
                    </button>
                </div>
            </div>
        )
    }
}
