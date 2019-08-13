import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class issueRow extends Component {
    render() {
        const issueRowData = this.props.issue
        const issueKey = this.props.key
        const navRoute = `/issueEdit/${issueRowData._id}`
        //consooe.log('nav route = ',navRoute)
        return (

            <tr key={issueKey}>
                <Link to={navRoute}>{issueRowData._id}</Link>   

                <th>{issueRowData.status}</th>
                <th>{issueRowData.owner}</th>
                <th>{issueRowData.effort}</th>
                <th>{issueRowData.title}</th>
                <th>{issueRowData.createdDate}</th>
                <th>{issueRowData.completionDate}</th>
            </tr>


        )
    }

};

export default issueRow;