import React from "react";
import { Image, Transformation } from "cloudinary-react";
import Modal from 'react-modal';

const customStyles = {
  content: {
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
    this.state = { photo: {},  modalIsOpen: false};
    this.openPhoto = this.openPhoto.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.displayPhotos = this.displayPhotos.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#6288a5";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.fetchPhotos();
    console.log(this.props.photos);
  }

  deletePhoto() {
    this.props.removePhoto(this.state.photo.id);
    this.closeModal();
  }

  openPhoto(photo) {
    return(e) => {
      this.setState({photo: photo});
      this.openModal();
    };
  }

  displayPhotos() {
    console.log(this.props.photos);
    return (
      <ul>
        {
          this.props.photos.map(photo => {
            console.log("photo",photo);
            return (
              <li key={photo.id}>
                <img src={photo.photo_url} onClick={this.openPhoto(photo)} />
              </li>
            );
          })
        }
      </ul>
    );
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
        <h2
          className="edit-form-greeting"
          ref={subtitle => (this.subtitle = subtitle)}
        >
          Photo Modal
          <img src={this.state.photo.photo_url} />
          <button onClick={this.deletePhoto}>Delete Photo</button>
        </h2>
        </Modal>
      </div>
    );
  }
}

export default UserIndexPhotos;


// <ul>
//   {this.props.photos.map(photo => {
//     return (
//       <li key={photo.id}>
//         <Image publicId={photo.photo_url} cloudName="foolishhunger">
//           <Transformation width="200" crop="scale" />
//         </Image>
//       </li>
//     );
//   })}
// </ul>
