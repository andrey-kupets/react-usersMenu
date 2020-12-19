import React, {Component} from 'react';

class EditWindow extends Component {

    state = {name: '', username: '', email: '', phone: '', website: ''};

    inputName = (e) => this.setState({name: e.target.value});
    inputUserName = (e) => this.setState({username: e.target.value});
    inputEmail = (e) => this.setState({email: e.target.value});
    inputPhone = (e) => this.setState({phone: e.target.value});
    inputWebsite = (e) => this.setState({website: e.target.value});

    render() {
        return (
            <div>
                <form>
                    <div>
                        <span>Name:</span>
                        <input onInput={this.inputName} type={'text'}/>
                    </div>
                    <div>
                        <span>UserName:</span>
                        <input onInput={this.inputUserName} type={'text'}/>
                    </div>
                    <div>
                        <span>Email:</span>
                        <input onInput={this.inputEmail} type={'text'}/>
                    </div>
                    <div>
                        <span>Phone:</span>
                        <input onInput={this.inputPhone} type={'text'}/>
                    </div>
                    <div>
                        <span>Website:</span>
                        <input onInput={this.inputWebsite} type={'text'}/>
                    </div>
                    <div>
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditWindow;