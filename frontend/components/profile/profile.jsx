import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import merge from 'lodash/merge';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false, user: this.props.currentUser};
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  update(field) {
    return e => {
      let newUserInfo = merge({},{id: this.props.user.id} ,this.state.user);
      newUserInfo[[field]]= e.currentTarget.value;
      this.setState({user: newUserInfo});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state.user).then(() => this.props.history.push('/homepage'));
  }
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Edit Profile</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input type="text" value={this.props.currentUser.username}
              readOnly/>
            <label>Bio:</label>
            <input type="text" onChange={this.update("bio")} value={this.state.user.bio}/>
            <label>Profile image url:</label>
            <input type="text" onChange={this.update("profile_img_url")} value={this.state.user.profile_img_url}/>
            <label>Cover image url:</label>
            <input type="text" onChange={this.update("cover_img_url")} value={this.state.user.cover_img_url}/>
            <input type="submit" value={'Update Profile'}></input>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Profile;

// render() {
//   return (
//     <div>
//       <ul>
//         grsegersg
//         {Object.keys(this.props.user).map(k => {
//           return <li>{this.props.user[k]}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
