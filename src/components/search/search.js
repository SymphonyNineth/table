import React, { Component } from "react";


import "./search.css"

export default class Search extends Component{

    state = {
        value: "",
    }
    onValueChange = (e) => {
    this.setState({
        value: e.target.value,
    })
}

    render() {
        const { value } = this.state;
        const { onSearch } = this.props;
        return (
            <form onSubmit={ e => onSearch(value, e)} className="input-group mb-3 mt-3">
                <input
                    value={ value } type="text"
                    className="form-control"
                    placeholder="Type to Search"
                    onChange={ this.onValueChange }
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-addon2"
                    >Search</button>
                </div>
            </form>

        )

    }
}


