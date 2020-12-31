import React, {Component} from 'react';
import UserService from "../../services/UserService";
import Loading from "../../services/Loading";

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
        if (fullUser) {
            return (
                <div>
                    <div>
                        <h3><b>FULL USERINFO</b></h3>
                        <div>{id} - {name}</div>
                        <div>{username}</div>
                        <div>{email}</div>
                        <div>{phone}</div>
                        <div>{website}</div>
                        <div>
                            <button onClick={() => {showEditUserWindow()}}>Edit</button>
                            <button onClick={() => {deleteUser(id)}}>Delete</button>
                        </div>
                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    <Loading/>
                </div>
            )
        }
    }
}

export default FullUserInfo;