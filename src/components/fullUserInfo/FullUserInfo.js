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
        const {showEditWindow} = this.props;
        console.log(showEditWindow)
        return (
            <div>
                {<div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                    <div>
                        <button onClick={() => {showEditWindow()}}>Edit</button>
                        <button onClick={() => {}}>Delete</button>
                    </div>
                </div>}
            </div>

        );
    }
}

export default FullUserInfo;