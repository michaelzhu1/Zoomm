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
    zIndex: 10
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

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: {} };
    this.displayPhotos = this.displayPhotos.bind(this);
    this.openPhoto = this.openPhoto.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.props.fetchUserFeed();
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

  displayPhotos() {
    if (this.props.photos.length === 0) {
      return (
        <div className="empty-feed">
          Your feed is empty because you are not following anyone.
          <Link className="discover-link" to="/discover">
            Discover amazing photos here!
          </Link>
        </div>
      );
    } else {
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
  }

  render() {
    return (
      <div>
        {this.displayPhotos()}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="PhotoFeed"
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

export default FeedIndex;
