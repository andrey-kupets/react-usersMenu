import React, {Component} from 'react';
import UserService from "../../services/UserService";

class FullUserInfo extends Component {
    state = {user: []};
    userService = new UserService();

    async componentDidMount() {
        const {match: {params: {id}}} = this.props;
        const user = await this.userService.getUser(id);
        this.setState({user});
        console.log(this.state)
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                {<div>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                    <button>Save</button>
                    <button>Delete</button>
                </div>}
            </div>

        );
    }
}

export default FullUserInfo;