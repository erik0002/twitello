import React, {Component} from 'react';
import s from './post-list-item.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faHeart, faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-free/css/all.css"

export default class PostListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this)
        this.onLiked = this.onLiked.bind(this)
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLiked() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render () {

        const {label} = this.props;
        const {important, like} = this.state;

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
                        onClick={this.onImportant}
                    >
                        <i className="fa fa-star"/>
                    </button>
                    <button
                        type="button"
                        className={`${s.btnTrash} btn-sm`}
                    >
                        <i className="fa fa-trash-alt"/>
                    </button>
                    <button
                        type="button"
                        className={`${s.faHeart} btn-sm`}
                        onClick={this.onLiked}
                    >
                        <i className="fa fa-heart"/>
                    </button>
                </div>
            </div>
        )
    }
}
