import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
    this.props.fetchUser(this.props.match.params.userId);
  }
  render() {
    return (
      <div>
        <ul>
          grsegersg
          {Object.keys(this.props.user).map(k => {
            return <li>{this.props.user[k]}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Profile;
