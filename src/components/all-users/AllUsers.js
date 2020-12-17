import React, {Component} from 'react';
import {useFetch} from "../../services/useFetch";
// import * as url from "url";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import User from "../user/User";




class AllUsers extends Component {

    state = { users: []};

    componentDidMount() {
        const {match: {url}} = this.props;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useFetch(url).then(users => this.setState({users}));
    }

    render() {
        const {users} = this.state;
        console.log(users);
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default withRouter(AllUsers);