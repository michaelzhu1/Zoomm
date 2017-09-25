import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    zIndex: 10
  },
  content: {
    width: "550px",
    height: "550px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 11
  }
};

class ProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      user: this.props.currentUser,
      profile_img_url: ""
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProfilePhoto = this.updateProfilePhoto.bind(this);
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
    console.log(this.props);
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
    this.props.updateUser(this.state.user).then(() => this.closeModal());
  }

  profilePhoto() {
    let imgurl = this.state.user.cover_img_url;
    const backgroundImage = { backgroundImage: `url(` + imgurl + `)` };
    return (
      <div className="profile-photo-div">
        <img
          className="profile-photo"
          onClick={this.updateProfilePhoto}
          src={this.state.user.profile_img_url}
        />
      </div>
    );
  }

  updateProfilePhoto() {
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      function(error, images) {
        if (error === null) {
          let newUser = this.props.currentUser;
          newUser.profile_img_url = images[0].url;
          this.props.updateUser(this.state.user);
          this.setState({ user: newUser });
        }
      }.bind(this)
    );
  }

  updateCoverPhoto() {
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      function(error, images) {
        if (error === null) {
          let newUser = this.props.currentUser;
          newUser.cover_img_url = images[0].url;
          this.props.updateUser(this.state.user);
          this.setState({ user: newUser });
        }
      }.bind(this)
    );
  }

  render() {
    return (
      <div className="profile-form">
        {this.profilePhoto()}
        <button className="edit-profile-button" onClick={this.openModal}>
          Edit Profile
        </button>
        <div>
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
            <div>{this.profilePhoto()}</div>

            <form className="edit-profile-form" onSubmit={this.handleSubmit}>
              <label>Username: {this.props.currentUser.username}</label>

              <br />
              <br />
              <label>
                Bio:
                <textarea
                  className="bio-textarea glowing-border"
                  onChange={this.update("bio")}
                  value={this.state.user.bio || ""}
                />
              </label>
              <label>Profile image url:</label>
              <input
                type="text"
                onChange={this.update("profile_img_url")}
                value={
                  this.state.user.profile_img_url ===
                  "http://res.cloudinary.com/foolishhunger/image/upload/v1506356812/contacts-512_m08nd3.png"
                    ? ""
                    : this.state.user.profile_img_url
                }
                className="glowing-border profile-form-input"
              />

              <label>Cover image url:</label>
              <input
                type="text"
                onChange={this.update("cover_img_url")}
                value={this.state.user.cover_img_url || ""}
                className="glowing-border profile-form-input"
              />
              <br />
              <br />

              <input
                className="update-profile-button"
                type="submit"
                value={"Update Profile"}
              />
              <button
                className="upload-cancel-button"
                onClick={this.closeModal}
              >
                Cancel
              </button>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileUpdate);

// <i
//   className="fa fa-user-circle-o fa-4x icon-profile"
//   aria-hidden="true"
// />
