import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingSpinner from "../loading_spinner";


const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 10
  },
  content: {
    padding: "20px",
    width: "40%",
    minHeight: "600px",
    minWidth: "400px",
    height: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    zIndex: 11,
    maxWidth: "650px",
    maxHeight: "700px"
  }
};

let styles = {
  backgroundSize: "cover",
  backgroundColor: "gray",
  width: "100%",
  height: "400px"
};

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      currentUser: this.props.currentUser,
      id: this.props.user.id,
      bio: this.props.user.bio,
      profile_img_url: "",
      cover_img_url: "",
      followers: this.props.followers,
      followings: this.props.followings,
      loading: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProfilePhoto = this.updateProfilePhoto.bind(this);
    this.updateCoverPhoto = this.updateCoverPhoto.bind(this);
    this.coverPhoto = this.coverPhoto.bind(this);
    this.profilePhoto = this.profilePhoto.bind(this);
    this.modalProfilePhoto = this.modalProfilePhoto.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  update(field) {
    return e => {
      let newUserInfo = merge(
        {},
        { id: this.props.currentUser.id },
        this.state.currentUser
      );
      newUserInfo[[field]] = e.currentTarget.value;
      this.setState({ currentUser: newUserInfo });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state.currentUser).then(() => this.closeModal());
  }

  componentDidMount() {

    this.props.fetchUser(this.props.match.params.userId).then(() => {
      this.setState({
        profile_img_url: this.props.user.profile_img_url,
        cover_img_url: this.props.user.cover_img_url,
        loading: false
      });
    }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id !== parseInt(nextProps.match.params.userId)) {
      this.props.fetchUser(nextProps.match.params.userId).then(() =>
        this.setState({
          profile_img_url: nextProps.user.profile_img_url,
          cover_img_url: nextProps.user.cover_img_url,
          loading: false
        })
      );
    }
  }

  profilePhoto() {
    if (this.props.currentUser.id == this.props.match.params.userId) {
      return (
        <div className="profile-photo-div">
          <img
            className="current-profile-photo"
            onClick={this.updateProfilePhoto}
            src={this.state.profile_img_url}
          />
        </div>
      );
    } else {
      return (
        <div className="profile-photo-div">
          <img className="current-profile-photo" src={this.state.profile_img_url} />
        </div>
      );
    }
  }
  modalProfilePhoto() {
    if (this.props.currentUser.id == this.props.match.params.userId) {
      return (
        <div className="profile-photo-div">
          <img
            className="current-profile-photo-modal"
            onClick={this.updateProfilePhoto}
            src={this.state.profile_img_url}
          />
        </div>
      );
    } else {
      return (
        <div className="profile-photo-div">
          <img className="current-profile-photo-modal" src={this.state.profile_img_url} />
        </div>
      );
    }
  }

  coverPhoto() {
    if (this.state.cover_img_url) {
      styles.background = `url(${
        this.state.cover_img_url
      }) fixed top center no-repeat`;
    } else {
      styles = {
        backgroundSize: "cover",
        backgroundColor: "gray",
        width: "100%",
        height: "400px"
      };
    }
    if (this.props.currentUser.id == this.props.match.params.userId) {
      return (
        <div
          className="cover-photo hover"
          style={styles}
          onClick={this.updateCoverPhoto}
        />
      );
    } else {
      return <div className="cover-photo" style={styles} />;
    }
  }

  updateProfilePhoto() {
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      function(error, images) {
        if (error === null) {
          let newUser = merge({}, this.state.currentUser);
          newUser.profile_img_url = images[0].url;
          this.props.updateUser(newUser);
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
          let newUser = merge({}, this.state.currentUser);
          newUser.cover_img_url = images[0].url;
          this.props.updateUser(newUser);
          this.setState({ currentUser: newUser });
        }
      }.bind(this)
    );
  }

  followButton() {
    const userFollowers = this.props.followers.map(follower => {
      return follower.id;
    });
    if (userFollowers.includes(this.props.currentUser.id)) {
      return (
        <button
          className="edit-profile-button"
          onClick={() => this.props.unfollow({ user_id: this.props.user.id })}
        >
          Following
        </button>
      );
    } else {
      return (
        <button
          className="edit-profile-button"
          onClick={() => this.props.follow({ user_id: this.props.user.id })}
        >
          Follow
        </button>
      );
    }
  }

  followOrEditButton() {
    if (this.props.currentUser) {
      if (
        this.props.currentUser.id === parseInt(this.props.match.params.userId)
      ) {
        return (
          <div className="user-header-info">
            <div className="follow-info">
              {Object.keys(this.props.photos).length} Photos &nbsp; &nbsp;{
                this.props.user.followers.length
              }&nbsp; Followers &nbsp; &nbsp;{this.props.user.followings.length}{" "}
              Following &nbsp;
            </div>

            <button className="edit-profile-button" onClick={this.openModal}>
              Edit Profile
            </button>
          </div>
        );
      } else {
        return (
          <div className="user-header-info">
            {Object.keys(this.props.photos).length} Photos &nbsp; &nbsp;{
              this.props.user.followers.length
            }{" "}
            Followers &nbsp; &nbsp;{this.props.user.followings.length} Following
            &nbsp;
            {this.followButton()}
          </div>
        );
      }
    }
  }

  render() {
    return this.state.loading ? (
      <LoadingSpinner />
    ) : (
      <div className="profile-form">
        {this.coverPhoto()}
        {this.profilePhoto()}
          <div className="edit-profile-div">{this.followOrEditButton()}</div>
          <div className="user-info">
            <div className="username-in-profile">{this.props.user.username}</div>
            <div className="bio-in-profile">{this.props.user.bio}</div>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
              {this.modalProfilePhoto()}
            <form className="edit-profile-form" onSubmit={this.handleSubmit}>
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
                  "https://www.zeppfeed.com/media/uploads/users/default.png"
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
                value={"Save"}
              />
              <button className="cancel-button" onClick={this.closeModal}>
                Cancel
              </button>
            </form>
          </Modal>
      </div>
    );
  }
}

export default withRouter(ProfileHeader);
