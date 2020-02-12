import React from "react";
import User from "./User";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class UserList extends React.Component {
  render() {
    return (
      <Container>
        {this.props.users.map(user => <User key={user.login} {...user} />)}
      </Container>
    );
  }
}

export default UserList;