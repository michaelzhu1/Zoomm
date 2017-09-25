import React from "react";
import { Image, Transformation } from "cloudinary-react";
import Modal from "react-modal";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";

const customStyles = {
  content: {
    height: "90vh",
    width: "80vw",
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
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.displayPhotos = this.displayPhotos.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#6288a5";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.fetchPhotos();
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
            <li key={photo.id} className="profile-index-photo">
              <img src={photo.photo_url} onClick={this.openPhoto(photo)} />
            </li>
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

  // closePhotoModal() {
  //   this.setState({ photo: {} });
  //   this.closeModal();
  // }

  displayCoverPhoto() {}

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

            <div className="photo-show-right">
              <h3>Edit Photo</h3>
              <form className="photo-show-form" onSubmit={this.updatePhoto}>
                {this.props.currentUser.username}
                <h4>Photo Title</h4>
                <input
                  type="text"
                  value={this.state.photo.photo_title}
                  onChange={this.update("photo_title")}
                  className="photo-info-title"
                />
                <h4>Photo Description</h4>
                <textarea
                  value={this.state.photo.photo_description || ""}
                  onChange={this.update("photo_description")}
                  className="photo-info-description"
                />
                <input type="submit" value="Save" />
              </form>
              <button onClick={this.closeModal}>Cancel</button>
              <button onClick={this.deletePhoto}>Delete Photo</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(UserIndexPhotos);
