import { Component } from 'react';

class Search extends Component {
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
                type="text"
                placeholder="Buscar por fecha"
                className="search-input"
                value={this.state.searchDate}
                onChange={(evento) => {
                    console.log(evento.target.value)
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

export default Search;