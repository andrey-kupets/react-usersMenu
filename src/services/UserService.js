import React, {Component} from 'react';
import useFetch from "./useFetch";

class UserService extends Component {
   getUser(url, id) {
       return useFetch(`${url}/${id}`).then(user => user.json());
   }
}

export default UserService;

