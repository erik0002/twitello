import React, {Component} from 'react'
import s from './post-add-form.module.css';
import cx from 'classnames';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form
                className={cx(s.bottomPanel, 'd-flex')}
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="What are you thinking about now?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Add Post
                </button>
            </form>
        )
    }
}
