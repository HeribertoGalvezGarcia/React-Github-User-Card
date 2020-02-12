import React from 'react';
import './App.css';
import UserList from "./components/UserList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  addUserWithFollowers = url => {
    this.addUser(url);

    fetch(`${url}/followers`)
      .then(res => res.json())
      .then(users => {
        for (const user of users) this.addUser(user.url)
      });
  };

  addUser = url => {
    fetch(url)
      .then(res => res.json())
      .then(user => this.setState(state => {
        state.users = [...state.users, user];
        return state
      }))
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.addUserWithFollowers("https://api.github.com/users/HeribertoGalvezGarcia");
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    );
  }
}
export default App;
