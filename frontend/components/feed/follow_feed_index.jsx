import React from "react";
import Modal from "react-modal";

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

class FeedIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {photo: {}, user: {}};
    this.displayPhotos = this.displayPhotos.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }


  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  componentDidMount() {
    this.props.fetchUserFeed();
  }

  openPhoto(photo) {
    return e => {
      this.setState({ photo: photo });
      this.openModal();
    };
  }

  displayPhotos() {
    console.log(this.props);
    return(
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

  render() {
    return(
      <div>
        {this.displayPhotos()}
      </div>
    );
  }
}


export default FeedIndex;
