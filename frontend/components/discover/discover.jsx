import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import Masonry from 'react-masonry-component';
import DiscoverIndexItems from './discover_index_items';

const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true
};

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  content: {
    padding: "30px",
    boxSizing: "border-box",
    height: "90%",
    width: "90%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

  }
};

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: {}, modalIsOpen: false,loading: true };
    this.openPhoto = this.openPhoto.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.discoverPhotos = this.discoverPhotos.bind(this);
    this.followOrFollowing = this.followOrFollowing.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos().then( () => (this.setState({ loading: false})));
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
// shuffles every time i open a modal and scroll to the top of the page

//   shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

  discoverPhotos() {
    return (
      (this.state.loading) ? <BeatLoader
        color={'#123abc'}
        loading={this.state.loading}
      /> :
      <Masonry
            className={'my-gallery-class'}
            options={masonryOptions}
            >
            {this.props.photos.map((photo,idx) => (
                <DiscoverIndexItems key={idx} photo={photo} openPhoto={this.openPhoto}/>
                ))
              }
          </Masonry>
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
