import React, {Component} from 'react';

class EditUserWindow extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        const {fullUser: {id, name, username, email, phone, website}} = this.props;
        this.state = {id, name, username, email, phone, website};
        console.log(this.state)
    }
    inputName = (e) => this.setState({name: e.target.value});
    inputUserName = (e) => this.setState({username: e.target.value});
    inputEmail = (e) => this.setState({email: e.target.value});
    inputPhone = (e) => this.setState({phone: e.target.value});
    inputWebsite = (e) => this.setState({website: e.target.value});


    render() {
        const {name, username, phone, email, website} = this.state;
        const {saveEditUser} = this.props;
        return (
            <div>
                <div>
                    <h3><b>USER EDITION MENU</b></h3>
                    <div>
                        <span>Name:</span>
                        <input onInput={this.inputName} type={'text'} defaultValue={name}/>
                    </div>
                    <div>
                        <span>UserName:</span>
                        <input onInput={this.inputUserName} type={'text'} defaultValue={username}/>
                    </div>
                    <div>
                        <span>Email:</span>
                        <input onInput={this.inputEmail} type={'text'} defaultValue={email}/>
                    </div>
                    <div>
                        <span>Phone:</span>
                        <input onInput={this.inputPhone} type={'text'} defaultValue={phone}/>
                    </div>
                    <div>
                        <span>Website:</span>
                        <input onInput={this.inputWebsite} type={'text'} defaultValue={website}/>
                    </div>
                    <div>
                        <button onClick={() => saveEditUser('save', this.state)}>Save</button>
                        <button onClick={() => saveEditUser()}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUserWindow;