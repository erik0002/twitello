import React, {Component} from 'react'
import s from './search-panel.module.css';
import cx from 'classnames';

export default class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(event) {
        const term = event.target.value;
        this.setState({
            term
        });
        this.props.onUpdateSearch(term);
    }

    render () {
        return (
            <div className={s.searchPanel}>
                <input
                    className={cx("form-control", s.searchInput)}
                    type="text"
                    placeholder="Search..."
                    onChange={this.onUpdateSearch}
                />
            </div>
        )
    }
}

