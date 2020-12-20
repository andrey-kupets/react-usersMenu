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

    saveEditWindow = (btnName, stateEditWindow) => {
        if (btnName === 'save') {
            const users = this.state.users.filter(user => user.id !== stateEditWindow.id);
            users.push(stateEditWindow);
            this.setState({users});
            users.sort((a, b) => a.id - b.id)
        }
            this.setState({editWindow: ''})
    }

    // modalSaveClose = (btnName, stateFromModal) => {
    //     if (btnName === 'save') {
    //         const users = this.state.users.filter(user => user.id !== stateFromModal.id)
    //         users.push(stateFromModal)
    //         this.setState({chosenUser: stateFromModal})
    //         users.sort((a, b) => {
    //             return a.id - b.id
    //         })
    //         this.setState({users})
    //     }
    //     this.setState({modal: ''})
    // }

    render() {
        const {users, editWindow, fullUser} = this.state;
        return (
            <div className={'parent'}>
                <div className={'column'}>{users.map(value => <User oneUser={value} key={value.id} fullUser={this.fullUser}/>)}</div>
                <div className={'column'}>
                    {fullUser && <FullUserInfo showEditWindow={this.showEditWindow} fullUser={fullUser}/>}
                </div>
                {editWindow && <EditWindow fullUser={fullUser} saveEditWindow={this.saveEditWindow}/>}
            </div>
        );
    }
}

export default withRouter(AllUsers);

