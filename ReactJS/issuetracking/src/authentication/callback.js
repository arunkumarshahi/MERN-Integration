import React, { Component } from 'react';
import Auth from '../authentication/Auth'

class callback extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
    const auth = new Auth();
    auth.handleAuthentication();
    }
   render(){
       return(<div/>)
   }

}

export default callback;