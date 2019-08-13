import React, { Component } from 'react';
import IssueFilter from './IssueFilter';
import AddIssue from '../components/addIssue'
import IssueTable from '../components/issueTable'
import axios from 'axios';

class IssueList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            issueList: []
        }
        this.addIssue = this.addIssue.bind(this);
    }

    addIssue = (newIssue) => {
        // console.log("old issue added => ", this.state.issuesList)
        // let newIssues = Object.assign([], this.state.issuesList);
        // console.log("copy New issue added => ", newIssues)
        // newIssues.push(newIssue);
        // this.setState({ issuesList: newIssues })
        // console.log("New issue added => ", this.state.issuesList)
        axios.post('http://localhost:4000/api/issues', { ...newIssue }).then((response) => {
            console.log("data retrieved ", response)
            this.setState({ issuesList: response.data.records })

        }).catch((error) => { console.log("error occured with details ..", error) })
    }

    componentDidMount() {
        this.loadIssueList();
    }

    loadIssueList = () => {
        // calll following api to get list of issues 
        //http://localhost:4000/api/issues
        axios.get('http://localhost:4000/api/issues').then((response) => {
            console.log("error occured ", response)
            this.setState({ issuesList: response.data.records })
        }).catch((error) => { console.log("error occured ", error) })
        // const newIssues = [...this.state.issueList];

    }

    filterRecord=(searchCriteria)=>{
        console.log("filter params -->",searchCriteria)
        axios.get('http://localhost:4000/api/issues/filter',{
            params: searchCriteria}).then((response) => {
            console.log("error occured ", response)
            this.setState({ issuesList: response.data.records })
        }).catch((error) => { console.log("error occured ", error) })
    }
    render() {
        return (
            <div className="App">
                <div>
                    <h1>Issue Tracker</h1>
                    <IssueFilter filterRecord={this.filterRecord} clearFilter={this.loadIssueList}/>
                    <hr />
                    <IssueTable issues={this.state.issuesList} />
                    <hr />
                    <AddIssue addNewIssue={this.addIssue} />
                </div>
            </div>)
    }

}
export default IssueList;