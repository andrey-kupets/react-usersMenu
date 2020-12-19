import React, {Component} from 'react';
import doFetch from "../../services/UseFetch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import User from "../user/User";
import FullUserInfo from "../fullUserInfo/FullUserInfo";
import './AllUsers.css';

class AllUsers extends Component {

    state = {users: []};

    componentDidMount() {
        const {match: {url}} = this.props;
        doFetch(url).then(users => this.setState({users}));
    }

    render() {
        const {users} = this.state;
        return (
            <div className={'parent'}>
                <div className={'column'}>{users.map(value => <User item={value} key={value.id}/>)}</div>
                <div className={'column'}>
                    <Route path={'/users/:id'} render={(props) => {
                        console.log(props)
                        const {match: {params: {id}}} = props;
                        return <FullUserInfo {...props} key={id}/>
                    }}/>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);

// <div className={'nest'}>
//     <Route path={'/users/:id'} render={(props) => {
//         let {match: {params: {id}}} = props;
//         return <FullUser {...props} key={id}/>;
//     }}/>
// </div>
