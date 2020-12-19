import React, {Component} from 'react';
import doFetch from "../../services/UseFetch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import User from "../user/User";
import FullUserInfo from "../fullUserInfo/FullUserInfo";
import './AllUsers.css';
import EditWindow from "../edit-window/EditWindow";

class AllUsers extends Component {

    state = {users: [], editWindow: '', fullUser: []};

    componentDidMount() {
        const {match: {url}} = this.props;
        doFetch(url).then(users => this.setState({users}));
    }

    showEditWindow = () => {
        this.setState({editWindow: 'visible'})
    }

    // fullUser = (fullUser) => {
    //     this.setState({fullUser})
    // }

    render() {
        const {users, editWindow} = this.state;
        return (
            <div className={'parent'}>
                <div className={'column'}>{users.map(value => <User item={value} key={value.id}/>)}</div>
                <div className={'column'}>
                    <Route path={'/users/:id'} render={(props) => {
                        console.log(props)
                        const {match: {params: {id}}} = props;
                        return <FullUserInfo {...props} showEditWindow={this.showEditWindow} key={id}/>
                    }}/>
                </div>
                {editWindow && <EditWindow/>}
            </div>
        );
    }
}

export default withRouter(AllUsers);

