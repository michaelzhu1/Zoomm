import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import DiscoverIndexItems from "./discover_index_items";
import LoadingSpinner from "../loading_spinner";
import { DiscoverPeopleItems } from "./discover_people_items";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)"
  },
  content: {
    padding: "30px",
    boxSizing: "border-box",
    height: "80%",
    width: "90%",
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
    this.state = {
      photo: {},
      modalIsOpen: false,
      user: {},
      photos: [],
      mount: true
    };
    this.openPhoto = this.openPhoto.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.discoverPhotos = this.discoverPhotos.bind(this);
    this.followOrFollowing = this.followOrFollowing.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos().then(() =>
      this.setState({
        photos: this.shuffle(this.props.photos)
      })
    );
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, photo: {}, user: {} });
  }

  openPhoto(photo) {
    return () => {
      this.props.fetchUser(photo.author_id).then(() =>
        this.setState({
          photo: photo,
          user: this.props.user,
          modalIsOpen: true
        })
      );
    };
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  discoverPhotos() {
    return this.props.loading ? (
      <LoadingSpinner />
    ) : (
      <div className="photo-container">
        <div className="photo-index">
          {this.state.photos.map((photo, idx) => (
            <DiscoverIndexItems
              key={photo.id}
              photo={photo}
              openPhoto={this.openPhoto}
            />
          ))}
        </div>
      </div>
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

  arrayUnique(arr) {
    const flags = {}, output = [];
    for (let i = 0; i < arr.length; i++) {
      if (flags[arr[i].author_id]) {
        continue;
      }
      flags[arr[i].author_id] = true;
      output.push(arr[i]);
    }
    return output;
  }

  discoverPeople() {
    return this.props.loading ? (
      <LoadingSpinner />
    ) : (
      <div className="people-container">
        <div className="page-title">~Treading Photographers~</div>
        <div className="people-index">
          {
            this.arrayUnique(this.state.photos.slice(0,4)).map((photo, idx) => (
              <DiscoverPeopleItems photo={photo} key={idx}/>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.discoverPeople()}
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
                  src={this.state.user.profile_img_url}
                />
                <Link
                  className="userpage-link"
                  to={`/user/${this.state.user.id}`}
                >
                  {this.state.user.username}
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
