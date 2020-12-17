import React, {Component} from 'react';

class User extends Component {
    render() {
        const {item} = this.props;
        return (
            <div>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {item.id} - {item.name}
            </div>
        );
    }
}

export default User;