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
        const {item, match: {url}} = this.props;
        return (
            <div>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {item.id} - {item.name}
                {<button><Link to={`${url}/${item.id}`}>details...</Link></button>}
            </div>
        );
    }
}

export default withRouter(User);