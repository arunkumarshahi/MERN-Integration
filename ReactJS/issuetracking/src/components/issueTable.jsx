import React, { Component } from 'react';
import IssueRow from './issueRow';

class issueTable extends Component {
    render() {
        const issuerows = this.props.issues && this.props.issues.map((issue) => <IssueRow key={issue.id} issue={issue} />)
        return (
            <div >
                <table>
                    <thead>
                        <tr className='grayBackground'>
                            <th>id</th>
                            <th>status</th>
                            <th>owner</th>
                            <th>effort</th>
                            <th>title</th>
                            <th>createdDate</th>
                            <th>completionDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issuerows}
                    </tbody>

                </table>
            </div>)
    }

}
export default issueTable