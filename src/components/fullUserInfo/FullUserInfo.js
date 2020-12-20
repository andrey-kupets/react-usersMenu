import React, {Component} from 'react';
import UserService from "../../services/UserService";

class FullUserInfo extends Component {
    // state = {user: []};
    // userService = new UserService();

    // async componentDidMount() {
    //     const {match: {params: {id}}} = this.props;
    //     const user = await this.userService.getUser(id);
    //     this.setState({user});
    //     console.log(this.state)
    // }

    render() {
        // const {user} = this.state;
        const {showEditUserWindow, deleteUser, fullUser} = this.props;
        const {id, name, username, email, phone, website} = fullUser;
        console.log(showEditUserWindow)
        return (
            <div>
                <div>
                    <span>{id} - {name}</span>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    <div>
                        <button onClick={() => {showEditUserWindow()}}>Edit</button>
                        <button onClick={() => {deleteUser(id)}}>Delete</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default FullUserInfo;