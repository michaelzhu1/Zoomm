import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import merge from "lodash/merge";

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
    this.state = { modalIsOpen: false, user: this.props.currentUser };
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
    this.subtitle.style.color = "#6288a5";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  update(field) {
    return e => {
      let newUserInfo = merge({}, { id: this.props.user.id }, this.state.user);
      newUserInfo[[field]] = e.currentTarget.value;
      this.setState({ user: newUserInfo });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateUser(this.state.user)
      .then(() => this.props.history.push("/homepage"));
  }
  render() {
    return (
      <div className="profile-form">
        <button className="edit-profile-button" onClick={this.openModal}>
          Edit Profile
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2
            className="edit-form-greeting"
            ref={subtitle => (this.subtitle = subtitle)}
          >
            Hello {this.props.currentUser.username}!
          </h2>
          <div>
            <i
              className="fa fa-user-circle-o fa-4x icon-profile"
              aria-hidden="true"
            />
          </div>

          <form className="edit-profile-modal" onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              value={this.props.currentUser.username}
              readOnly
            />

            <label>
              Bio:
              <textarea
                className="bio-textarea glowing-border"
                onChange={this.update("bio")}
                value={this.state.user.bio}
              />
            </label>
            <label>Profile image url:</label>
            <input
              type="text"
              onChange={this.update("profile_img_url")}
              value={this.state.user.profile_img_url}
              className="glowing-border profile-form-input"
            />

            <label>Cover image url:</label>
            <input
              type="text"
              onChange={this.update("cover_img_url")}
              value={this.state.user.cover_img_url}
              className="glowing-border profile-form-input"
            />

            <input
              className="update-profile-button"
              type="submit"
              value={"Update Profile"}
            />
          </form>
        </Modal>
      </div>
    );
  }
}

export default Profile;

// <button onClick={this.closeModal}>close</button>
