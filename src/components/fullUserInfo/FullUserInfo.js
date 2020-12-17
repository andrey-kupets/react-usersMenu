import React, {Component} from 'react';
import UserService from "../../services/UserService";

class FullUserInfo extends Component {
    state = {user: []};
    userService = new UserService();

    componentDidMount() {
        const user = this.userService.getUser();
        this.setState({user});
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                <div>{user.id} - {user.name} - {user.username} - {user.email} - {user.phone}</div>
            </div>
        );
    }
}

export default FullUserInfo;