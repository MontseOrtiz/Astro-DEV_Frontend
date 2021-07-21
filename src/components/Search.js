import { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchDate: ""
        };
    }
    render() {
        return (
        <div className="search-container">
            <input
                id="datefield"
                type="date"
                min="1995-06-16"
                placeholder="Buscar por fecha"
                className="search-input"
                value={this.state.searchDate}
                onChange={(evento) => {
                    this.setState({searchDate: evento.target.value});
                }}
            />
            <button
                className="search-button"
                onClick={() => {
                    this.props.emitSearch(this.state.searchDate);
                }}
            >
                Buscar
            </button>
        </div>
        );
    }
}

