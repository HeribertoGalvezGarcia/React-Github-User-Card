import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
`;

const Name = styled.h3`
  font-size: 3.4rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3px;
`;

const Username = styled.p`
  font-size: 1.8rem;
  font-style: italic;
  margin: 3px 0 10px;
`;

class User extends React.Component {
  render() {
    return (
      <Card>
        <Img src={this.props.avatar_url} alt="user avatar" />
        <div>
          <Name>{this.props.name || this.props.login}</Name>
          <Username>{this.props.login}</Username>
          <Text>Location: {this.props.location || "None"}</Text>
          <Text>Profile <a href={this.props.html_url}>{this.props.html_url}</a></Text>
          <Text>Followers: {this.props.followers}</Text>
          <Text>Following: {this.props.following}</Text>
          <Text>Bio: {this.props.bio || "None"}</Text>
        </div>
      </Card>
    )
  }
}

export default User;