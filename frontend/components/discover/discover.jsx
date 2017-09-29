import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  content: {
    padding: "30px",
    boxSizing: "border-box",
    height: "90vh",
    width: "90vw",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: {}, modalIsOpen: false };
    this.openPhoto = this.openPhoto.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.discoverPhotos = this.discoverPhotos.bind(this);
    this.followOrFollowing = this.followOrFollowing.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openPhoto(photo) {
    return e => {
      this.props.fetchUser(photo.author_id);
      this.setState({ photo: photo });
      this.openModal();
    };
  }

  discoverPhotos() {
    return (
      <ul className="feed-ul">
        {this.props.photos.map(photo => {
          return (
            <div key={photo.id + "div"} className="image">
              <li key={photo.id} className="profile-index-photo">
                <img src={photo.photo_url} onClick={this.openPhoto(photo)} />
              </li>
              <div className="hidden-photo-info">
                <div className="message">
                  "{photo.photo_title}"&nbsp;
                  {photo.age} ago
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }

  followOrFollowing() {
    if (this.props.currentUser.id !== parseInt(this.props.user.id)) {
      const userFollowers = this.props.user.followers.map(follower => {
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
  }

  render() {
    return (
      <div>
        {this.discoverPhotos()}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="DiscoverPhotos"
        >

            <div className="feed-photo">
              <div className="feed-photo-left">
                <img src={this.state.photo.photo_url} />
              </div>
              <div className="feed-photo-right">
                <h2>
                  <img
                    className="user-profile-photo"
                    src={this.props.user.profile_img_url}
                  />
                  <Link
                    className="userpage-link"
                    to={`/user/${this.props.user.id}`}
                  >
                    {this.props.user.username}
                  </Link>
                  {this.props.currentUser ? this.followOrFollowing() : null}
                </h2>
                <h3>{this.state.photo.photo_title}</h3>
                <h4>{this.state.photo.photo_description}</h4>
              </div>
            </div>

        </Modal>
      </div>
    );
  }
}

export default Discover;
