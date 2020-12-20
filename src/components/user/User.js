import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";



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

export default withRouter(User);