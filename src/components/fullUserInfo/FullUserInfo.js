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
        const {showEditWindow, fullUser} = this.props;
        const {id, name, username, email, phone, website} = fullUser;
        console.log(showEditWindow)
        return (
            <div>
                <div>
                    <p>{id}</p>
                    <p>{name}</p>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    <div>
                        <button onClick={() => {showEditWindow()}}>Edit</button>
                        <button onClick={() => {}}>Delete</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default FullUserInfo;