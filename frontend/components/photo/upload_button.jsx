import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      zIndex: 10
    },
    width: "80vw",
    height: "90vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      photo_title: "",
      photo_url: ""
    };
    this.uploadImage = this.uploadImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = "#6288a5";
  // }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      photo_title: "",
      photo_url: ""
    });
  }

  componentDidMount() {
  }

  uploadImage(image) {
    this.setState({ photo_url: image.url });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    this.props.postPhoto(this.state);
    if (this.state.photo_title && this.state.photo_url) {
      this.setState({
        modalIsOpen: false,
        photo_title: "",
        photo_url: ""
      });
    }
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      function(error, images) {
        if (error === null) {
          this.uploadImage(images[0]);
        }
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <button className="nav-upload-button" onClick={this.openModal}>
          <i className="fa fa-cloud-upload fa-1x" aria-hidden="true" />&nbsp;
          Upload
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="PhotoUpload"
        >
          <form className="upload-photo-form" onSubmit={this.handleSubmit}>
            <div className="upload-thumbnail">
              <img src={this.state.photo_url} />
            </div>
            <button className="upload-button-in-modal" onClick={this.upload}>
              <i className="fa fa-camera" aria-hidden="true" />&nbsp; Choose
              Photo
            </button>
            <label className="upload-form-label">
              Photo Title:
              <input
                type="text"
                value={this.state.photo_title}
                onChange={this.update("photo_title")}
                className="photo-title glowing-border"
              />
            </label>
            <label className="upload-form-label">
              Photo Description:
              <textarea
                value={this.state.photo_description}
                onChange={this.update("photo_description")}
                className="photo-description glowing-border"
                placeholder="(Optional)"
              />
            </label>
            <input
              className="upload-submit-button"
              type="submit"
              value="Submit"
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

export default UploadButton;

// <h2
//   className="edit-form-greeting"
//   ref={subtitle => (this.subtitle = subtitle)}
// >
//   Hello User!
// </h2>
