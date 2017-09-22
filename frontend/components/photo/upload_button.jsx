import React from "react";

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      function(error, images) {
        if (error === null) {
          this.props.postImage(images[0].url);
        }
      }.bind(this)
    );
  }

  render() {
    return <button onClick={this.upload}>Upload Photo</button>;
  }
}

export default UploadButton;
