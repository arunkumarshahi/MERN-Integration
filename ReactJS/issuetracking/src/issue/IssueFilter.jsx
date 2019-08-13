import React, { Component } from 'react';


class IssueFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { searchCriteria: '', searchValue: '' }
    }
    searchCriteriaChange = (event) => {
        this.setState({ searchCriteria: event.target.value })
    }

    searchValueChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    filterIncident = () => {

        this.props.filterRecord && this.props.filterRecord({ [this.state.searchCriteria]: this.state.searchValue })
    }
    render() {
        return (
            <div className="App filterDim" >
                <select name="searchCriteria" value={this.state.searchCriteria}
                    onChange={this.searchCriteriaChange}>
                    <option value="status">status</option>
                    <option value="owner">owner</option>
                    <option value="title">title</option>
                </select>
                <input type="text" placeholder='filter value'
                    value={this.state.searchValue}
                    onChange={this.searchValueChange}
                    name='searchValue' />

                <button onClick={this.filterIncident}> Filter Incident</button>
                <button onClick={this.props.clearFilter}> Clear Filter</button>
            </div>)
    }

}
export default IssueFilter;