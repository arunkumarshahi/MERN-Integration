import React, { Component } from 'react';


class addIssue extends Component {
    constructor(props) {
        super(props);
        this.newIncident = {}
    }
    valueHandler = (e) => {
        this.newIncident[e.target.name] = e.target.value
    }

    addNewIssue = (event) => {
        const defautData = {
            status: 'In Progress',
            owner: 'Arun K',
            effort: '10 days',
            createdDate: new Date()

        }
        console.log("Added new issues ::", this.newIncident)
        // this.newIncident[owner]=e.target.value

        const mergedIncident = Object.assign({}, defautData, this.newIncident);
        this.props.addNewIssue(mergedIncident)
    }
    render() {
        return (
            <div >
                <form >
                    <input type='text' placeholder='incident id' name='_id' onChange={this.valueHandler} />
                    <input type='text' placeholder='incident title' name='title' onChange={this.valueHandler} />
                    <button type='button' onClick={this.addNewIssue} >Add Issues </button>
                </form>
            </div>)
    }

}

export default addIssue;