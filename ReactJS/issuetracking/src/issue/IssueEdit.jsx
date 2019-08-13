import { Link } from 'react-router-dom'
import React, {Component} from 'react';
import axios from 'axios';

 class IssueEdit extends React.Component
 
{ // eslint-disable-line

  componentDidMount(){
    console.log("componentDidMount occured ", this.props.match.params.id)
    this.filterRecord({id:this.props.match.params.id})
  }

  filterRecord=(searchCriteria)=>{
    console.log("filter params -->",searchCriteria)
    axios.get('http://localhost:4000/api/issue',{
        params: searchCriteria}).then((response) => {
        console.log("error occured ", response)
       // this.setState({ issuesList: response.data.records })
    }).catch((error) => { console.log("error occured ", error) })
}


  render() {
    console.log("params ..",this.props.match.params.id)
    return (
        <div>
      <div>This is a placeholder for the Issue Edit page. {this.props.match.params.id}</div>
      <Link to="/issues">Back to issue list</Link>
      </div>
    );
  }
}
// IssueEdit.propTypes = {
//     params: React.PropTypes.object.isRequired,
//   };
export default IssueEdit