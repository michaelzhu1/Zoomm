import React from "react";
import UploadButton from "./upload_button";
import ImageList from "./photolist";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_title: "",
      photo_url: ""
    };
    this.uploadImage = this.uploadImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos();
    console.log(this.props);
  }

  uploadImage(image) {
    // debugger
    // const data = { photo_url: image.url, photo_title: "test" };
    this.setState({ photo_url: image.url });
    // debugger
    // this.props.postPhoto(data);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.postPhoto(this.state);
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Photo Title:
            <input
              type="text"
              value={this.state.photo_title}
              onChange={this.update("photo_title")}
              className="photo-title"
            />
          </label>
          <button onClick={this.upload}>Upload Photo</button>
          <img src={this.state.photo_url} />
          <input type="submit" value="Submit your new baby!!!" />
        </form>
      </div>
    );
  }
}

export default Photos;

// <input type="text" value={this.state.photo.photo_title}></input>

// <UploadButton uploadImage={this.uploadImage} />
