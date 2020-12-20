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
import EditWindow from "../edit-window/EditWindow";

class AllUsers extends Component {

    state = {users: [], editWindow: '', fullUser: ''};

    componentDidMount() {
        const {match: {url}} = this.props;
        doFetch(url).then(users => this.setState({users}));
    }

    showEditWindow = () => {
        this.setState({editWindow: 'visible'})
    }

    fullUser = (fullInfo) => {
        this.setState({fullUser: fullInfo})
    }

    saveEditWindow = () => {

    }

    render() {
        const {users, editWindow, fullUser} = this.state;
        return (
            <div className={'parent'}>
                <div className={'column'}>{users.map(value => <User oneUser={value} key={value.id} fullUser={this.fullUser}/>)}</div>
                <div className={'column'}>
                    {fullUser && <FullUserInfo showEditWindow={this.showEditWindow} fullUser={fullUser}/>}
                </div>
                {editWindow && <EditWindow fullUser={fullUser}/>}
            </div>
        );
    }
}

export default withRouter(AllUsers);

