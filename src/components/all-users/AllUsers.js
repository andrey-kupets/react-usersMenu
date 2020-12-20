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
import EditWindow from "../editUser-window/EditUserWindow";
import EditUserWindow from "../editUser-window/EditUserWindow";

class AllUsers extends Component {

    state = {users: [], editUserWindow: '', fullUser: ''};

    componentDidMount() {
        const {match: {url}} = this.props;
        doFetch(url).then(users => this.setState({users}));
    }

    showEditUserWindow = () => {
        this.setState({editUserWindow: 'visible'})
    }

    fullUser = (fullInfo) => {
        this.setState({fullUser: fullInfo})
    }

    saveEditUser = (btnName, stateEditUserWindow) => {
        if (btnName === 'save') {
            const users = this.state.users.filter(user => user.id !== stateEditUserWindow.id);
            users.push(stateEditUserWindow);
            this.setState({users});
            users.sort((a, b) => a.id - b.id);
        }
            this.setState({editUserWindow: ''});
    }

    deleteUser = (id) => {
        const newUsers = this.state.users.filter(user => user.id !== id);
        this.setState({users: newUsers});
    }


    render() {
        const {users, editUserWindow, fullUser} = this.state;
        return (
            <div className={'parent'}>
                <div className={'column'}>{users.map(value => <User oneUser={value} key={value.id} fullUser={this.fullUser}/>)}</div>
                <div className={'column'}>
                    {fullUser && <FullUserInfo showEditUserWindow={this.showEditUserWindow} deleteUser={this.deleteUser} fullUser={fullUser}/>}
                </div>
                {editUserWindow && <EditUserWindow fullUser={fullUser} saveEditUser={this.saveEditUser}/>}
            </div>
        );
    }
}

export default withRouter(AllUsers);

