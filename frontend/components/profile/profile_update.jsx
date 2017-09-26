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
    width: "50vw",
    height: "80vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 11
  }
};

const styles = {
  backgroundSize: "cover",
  backgroundColor: "gray",
  width: "100%",
  height: "400px"
};

class ProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      currentUser: this.props.currentUser,
      profile_img_url: ""
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProfilePhoto = this.updateProfilePhoto.bind(this);
    // this.followOrEditButton = this.followOrEditButton.bind(this);
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
    // this.props.fetchUser(this.props.match.params.userId);
    console.log(this.props);
    // this.props.fetchFollows();
  }

  update(field) {
    return e => {
      let newUserInfo = merge({}, { id: this.props.currentUser.id }, this.state.currentUser);
      newUserInfo[[field]] = e.currentTarget.value;
      this.setState({ currentUser: newUserInfo });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state.currentUser).then(() => this.closeModal());
  }

  profilePhoto() {
    return (
      <div className="profile-photo-div">
        <img
          className="profile-photo"
          onClick={this.updateProfilePhoto}
          src={this.props.user.profile_img_url}
        />
      </div>
    );
  }

  coverPhoto() {
    if (this.props.user.cover_img_url) {
      styles.background = `url(${this.props.user
        .cover_img_url}) fixed top center no-repeat`;
    }
    return (
      <div
        className="cover-photo"
        style={styles}
        onClick={this.updateCoverPhoto}
      />
    );
  }

  updateProfilePhoto() {
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      function(error, images) {
        if (error === null) {
          let newUser = this.props.currentUser;
          newUser.profile_img_url = images[0].url;
          this.props.updateUser(this.state.currentUser);
          this.setState({ currentUser: newUser });
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
          this.props.updateUser(this.state.currentUser);
          this.setState({ currentUser: newUser });
        }
      }.bind(this)
    );
  }

  followOrEditButton() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id == this.props.match.params.userId) {
        return (
          <button className="edit-profile-button" onClick={this.openModal}>
            Edit Profile
          </button>
        );
      } else if (this.props.follows.includes(this.props.currentUser.id)) {
        return (
          <button
            className="edit-profile-button"
            onClick={() => this.props.unfollow(this.props.currentUser.id)}
          >
            Following
          </button>
        );
      } else {
        return (
          <button
            className="edit-profile-button"
            onClick={() => this.props.follow(this.props.currentUser.id)}
          >
            Follow
          </button>
        );
      }
    }
  }

  render() {
    return (
      <div className="profile-form">
        {this.coverPhoto()}
        {this.profilePhoto()}
        <div>
          {this.followOrEditButton()}
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
            <div className="edit-profile-photo">{this.profilePhoto()}</div>

            <form className="edit-profile-form" onSubmit={this.handleSubmit}>
              <label>Username: {this.props.currentUser.username}</label>

              <br />
              <br />
              <label>
                Bio:
                <textarea
                  className="bio-textarea glowing-border"
                  onChange={this.update("bio")}
                  value={this.state.currentUser.bio || ""}
                />
              </label>
              <label>Profile image url:</label>
              <input
                type="text"
                onChange={this.update("profile_img_url")}
                value={
                  this.state.currentUser.profile_img_url ===
                  "http://www.zeppfeed.com/media/uploads/users/default.png"
                    ? ""
                    : this.state.currentUser.profile_img_url
                }
                className="glowing-border profile-form-input"
              />

              <label>Cover image url:</label>
              <input
                type="text"
                onChange={this.update("cover_img_url")}
                value={this.state.currentUser.cover_img_url || ""}
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
