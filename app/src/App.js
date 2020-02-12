import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from "./components/UserList";
import UserFormikForm from "./components/UserForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      username: "HeribertoGalvezGarcia"
    };
  }

  addUserWithFollowers = username => {
    this.setState({users: []});
    this.addUser(username);

    axios.get(`https://api.github.com/users/${username}/followers`, {
      headers: {
        'Authorization': 'token 7c1161ff37e2e2e55c62376b37ba311138b274ec'
      }
    })
      .then(({data: users}) => {
        for (const user of users) this.addUser(user.login)
      })
      .catch(e => console.log(e));
  };

  addUser = username => {
    axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        'Authorization': 'token 7c1161ff37e2e2e55c62376b37ba311138b274ec'
      }
    })
      .then(({data: user}) => this.setState(state => {
        state.users = [...state.users, user];
        return state
      }))
      .catch(e => console.log(e));
  };

  setUser = username => {
    this.setState({username});
  };

  componentDidMount() {
    this.addUserWithFollowers(this.state.username);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.username !== prevState.username) {
      this.addUserWithFollowers(this.state.username);
    }
  }

  render() {
    return (
      <div>
        <UserFormikForm setUser={this.setUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}
export default App;
