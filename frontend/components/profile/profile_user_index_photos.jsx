import React from "react";
import Modal from "react-modal";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";
import ProfileIndexItems from "./profile_index_items";
import LoadingSpinner from "../loading_spinner";
// import { BeatLoader } from "react-spinners";


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

class UserIndexPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {},
      modalIsOpen: false,
      photos: [],
      user: {},
      loading: true
    };
    this.openPhoto = this.openPhoto.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.displayPhotos = this.displayPhotos.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {

    this.props.fetchUserPhotos(this.props.match.params.userId).then(() => {
      this.setState({ loading: false, photos: this.props.photos });
    });
    window.scrollTo(0, 0);
  }

  //definitely need this method!!
  componentWillReceiveProps(newProps) {
    if (this.props.user.id !== parseInt(newProps.match.params.userId)) {
      this.props.fetchUser(newProps.match.params.userId).then(() => {
        this.setState({ loading: false });
      });
      this.props.fetchUserPhotos(newProps.match.params.userId).then(() => {
        this.setState({ loading: false, photos: this.props.photos });
      });
        }
  }

  deletePhoto() {
    this.props.removePhoto(this.state.photo.id);
    this.closeModal();
  }

  // openPhoto(photo) {
  //   return e => {
  //     this.setState({ photo: photo });
  //     this.openModal();
  //   };
  // }

  openPhoto(photo) {
    return () => {
      this.setState({
        photo: photo,
        user: this.props.user,
        modalIsOpen: true
      });
    };
  }

  displayPhotos() {
    return this.state.loading ? (
      <LoadingSpinner />
    ) : (
      <div className="photo-container">
        <div className="photo-index">
          {this.props.photos.map((photo, idx) => {
            return (
              <ProfileIndexItems
                key={idx}
                photo={photo}
                openPhoto={this.openPhoto}
              />
            );
          })}
        </div>
      </div>
    );
  }

  update(field) {
    return e => {
      let updatedPhoto = merge({}, this.state.photo);
      updatedPhoto[field] = e.currentTarget.value;
      this.setState({ photo: updatedPhoto });
    };
  }

  updatePhoto(e) {
    e.preventDefault();
    this.props.updatePhoto(this.state.photo);
    this.closeModal();
  }

  viewOrEditPhoto() {
    if (this.props.currentUser.id == this.props.match.params.userId) {
      return (
        <div className="photo-show-right">
          <h2>Photo Info</h2>
          <form className="photo-show-form" onSubmit={this.updatePhoto}>
            {this.state.user.username}
            <h4>Title</h4>
            <input
              type="text"
              value={this.state.photo.photo_title}
              onChange={this.update("photo_title")}
              className="photo-info-title glowing-border"
            />
            <h4>Description</h4>
            <textarea
              value={this.state.photo.photo_description || ""}
              onChange={this.update("photo_description")}
              className="photo-info-description glowing-border"
            />
            <input className="save-photo-info" type="submit" value="Save" />
            <button className="cancel-button" onClick={this.closeModal}>
              Cancel
            </button>
          </form>
          <button className="delete-photo-button" onClick={this.deletePhoto}>
            <i className="fa fa-trash-o fa-lg" aria-hidden="true" />{" "}
            &nbsp;Delete
          </button>
        </div>
      );
    } else {
      return (
        <div className="photo-show-right">
          <h2>Photo Info</h2>
          <form className="photo-show-form" onSubmit={this.updatePhoto}>
            {this.props.user.username}
            <h4>Title</h4>
            {this.state.photo.photo_title}

            <h4>Description</h4>
            {this.state.photo.photo_description || ""}
            <button className="cancel-button" onClick={this.closeModal}>
              Cancel
            </button>
          </form>
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
          contentLabel="PhotoUpload"
        >
          <div className="photo-info">
            <div className="photo-show-left">
              <img src={this.state.photo.photo_url} />
            </div>

            {this.viewOrEditPhoto()}
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(UserIndexPhotos);
