import React, {Component} from 'react';
import useFetch from "../../services/useFetch";
// import * as url from "url";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import User from "../user/User";
import FullUserInfo from "../fullUserInfo/FullUserInfo";




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
                <div>
                    <Route path={'/users/:id'} render={(props) => {
                        console.log(props)
                        return <FullUserInfo/>
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