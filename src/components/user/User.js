import React, {Component} from 'react';

class User extends Component {
    render() {
        const {fullUser, oneUser, oneUser: {id, name}} = this.props;
        return (
            <div>
                {id} - {name}
                <button onClick={() => fullUser(oneUser)}>details...</button>
            </div>
        );
    }
}

export default User;