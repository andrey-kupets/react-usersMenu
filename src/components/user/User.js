import React, {Component} from 'react';

class User extends Component {
    render() {
        const {item} = this.props;
        return (
            <div>
                {item.id} - {item.name}
            </div>
        );
    }
}

export default User;