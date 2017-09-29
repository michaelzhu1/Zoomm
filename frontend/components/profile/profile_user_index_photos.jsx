import React from "react";
import { Image, Transformation } from "cloudinary-react";
import Modal from "react-modal";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";

const customStyles = {
  content: {
    padding: "30px",
    boxSizing: "border-box",
    MaxHeight: "90vh",
    MaxWidth: "80vw",
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
    this.state = { photo: {}, modalIsOpen: false };
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
    this.props.fetchUserPhotos(this.props.match.params.userId);
    window.scrollTo(0,0);
  }

  //definitely need this method!!
  componentWillReceiveProps(newProps) {
    if (this.props.user.id !== parseInt(newProps.match.params.userId)) {
      this.props.fetchUser(newProps.match.params.userId);
      this.props.fetchUserPhotos(newProps.match.params.userId);
    }
  }

  deletePhoto() {
    this.props.removePhoto(this.state.photo.id);
    this.closeModal();
  }

  updatePhoto() {
    this.props.updatePhoto(this.state.photo);
    this.closeModal();
  }

  openPhoto(photo) {
    return e => {
      this.setState({ photo: photo });
      this.openModal();
    };
  }

  displayPhotos() {
    return (
      <ul>
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

  update(field) {
    return e => {
      let updatedPhoto = merge({}, this.state.photo);
      updatedPhoto[field] = e.currentTarget.value;
      this.setState({ photo: updatedPhoto });
    };
  }

  viewOrEditPhoto() {
    if (this.props.currentUser.id == this.props.match.params.userId) {
      return (
        <div className="photo-show-right">
          <h2>Photo Info</h2>
          <form className="photo-show-form" onSubmit={this.updatePhoto}>
            {this.props.currentUser.username}
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
            Delete Photo
          </button>
        </div>
      );
    } else {
      return (
        <div className="photo-show-right">
          <h2>Photo Info</h2>
          <form className="photo-show-form" onSubmit={this.updatePhoto}>
            {this.props.currentUser.username}
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
