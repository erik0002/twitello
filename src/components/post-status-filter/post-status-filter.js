import React, {Component} from 'react';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'All', label: 'All'},
            {name: 'like', label: 'liked'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn mr-2 ${clazz}`}
                    onClick={() => {onFilterSelect(name)}}
                >{label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
