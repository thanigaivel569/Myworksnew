import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index'
import { ndelete } from '../actions/index';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: {}
        };
    }

    view_details(event) {
        this.state.view = event;
        this.setState({ view: this.state.view });



    };

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>


                    <input type="radio" name="Answer" value={user.id} onClick={this.view_details.bind(this, user)} />
                    {user.first} {user.last},{user.age},{user.description}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
                <button>ADD </button>
                < button onClick={() => this.props.selectUser(this.state.view)}>VIEW</button>
                <button onClick={() => this.props.ndelete(this.state.view)}>DELETE </button>

                <button onClick={() => this.props.selectUser(this.state.view)} > EDIT</button>

            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser ,ndelete: ndelete}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
