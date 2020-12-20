import React, {Component} from 'react';
import doFetch from "../../services/UseFetch";
import {withRouter} from "react-router-dom";
import User from "../user/User";
import FullUserInfo from "../fullUserInfo/FullUserInfo";
import './AllUsers.css';
import EditUserWindow from "../editUser-window/EditUserWindow";
import CreateUserWindow from "../createUser-window/CreateUserWindow";

class AllUsers extends Component {

    state = {users: '', fullUser: '', editUserWindow: '', createUserWindow: ''};

    componentDidMount() {
        const {match: {url}} = this.props;
        doFetch(url).then(users => this.setState({users}));
    }

    fullUser = (fullInfo) => {
        this.setState({fullUser: fullInfo})
    }

    showEditUserWindow = () => {
        this.setState({editUserWindow: 'visible'})
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

    showCreateUserWindow = () => {
        this.setState({createUserWindow: 'visible'})
    }

    createUser = (btnName, stateCreateUserWindow) => {
        if (btnName === 'create') {
            const {users} = this.state;
            stateCreateUserWindow.id = users[users.length - 1].id + 1;
            users.push(stateCreateUserWindow)
            this.setState({users})
        }
        this.setState({createUserWindow: ''});
    }

    render() {
        const {users, fullUser, editUserWindow, createUserWindow} = this.state;
        return (
            <div className={'parent'}>
                <div className={'column'}>
                    {users && users.map(value => <User oneUser={value} key={value.id} fullUser={this.fullUser}/>)}
                    {users &&
                    <button onClick={() => {this.showCreateUserWindow()}}>
                        Create User
                    </button>}
                </div>
                <div className={'column'}>
                    {fullUser && <FullUserInfo showEditUserWindow={this.showEditUserWindow} deleteUser={this.deleteUser} fullUser={fullUser}/>}
                </div>
                {editUserWindow && <EditUserWindow fullUser={fullUser} saveEditUser={this.saveEditUser}/>}
                {createUserWindow && <CreateUserWindow createUser={this.createUser}/>}
            </div>
        );
    }
}

export default withRouter(AllUsers);

