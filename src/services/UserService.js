import React, {Component} from 'react';

class UserService extends Component {
    url = 'https://jsonplaceholder.typicode.com/users';

    getUser(id) {
        return fetch(`${this.url}/${id}`).then(user => user.json());
    }
}

export default UserService;