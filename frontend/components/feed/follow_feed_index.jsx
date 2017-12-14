import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import FeedIndexItems from "./feed_index_items";

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
    this.state = { photo: {},loading: true, user: {}, photos: {} };
    this.displayPhotos = this.displayPhotos.bind(this);
    this.openPhoto = this.openPhoto.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.props.fetchUserFeed().then( () => (this.setState({ loading: false, photos: this.props.photos})));
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openPhoto(photo) {
    return () => {
      this.props.fetchUser(photo.author_id).then(() => (
        this.setState({ photo:photo, user: this.props.user, modalIsOpen: true})
      ));
    };
  }

  displayPhotos() {
    if (this.state.photos.length === 0) {
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
        (this.state.loading) ?
          <BeatLoader
            color={'#123abc'}
            loading={this.state.loading}
          /> :
          <div className="photo-container">
            <h1 className="page-title">~Check Out Your Feed~</h1>
            <div className="photo-index">
              {this.state.photos.map((photo, idx) => {
                return (
                  <FeedIndexItems key={idx} photo={photo} openPhoto={this.openPhoto}/>
                );
              })}
            </div>
          </div>
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
                  src={this.state.user.profile_img_url}
                />
                <Link
                  className="userpage-link"
                  to={`/user/${this.state.user.id}`}
                >
                  {this.state.user.username}
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
