import React from "react";
import UploadButton from "./upload_button";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photo;
    this.postImage = this.postImage.bind(this);
  }

  componentWillMount() {
    this.props.fetchPhotos();
    console.log(this.props);
  }

  postImage(image) {
    // debugger
    const data = {photo_url: image.url, photo_title: "test"};
    // this.setState({photo: {photo_url: image.url}});
    // debugger
    this.props.postPhoto(data);
  }



  render() {
    return(
      <div>
        <UploadButton postImage={this.postImage}/>
      </div>
    );
  }
}

export default Photos;


// <input type="text" value={this.state.photo.photo_title}></input>
