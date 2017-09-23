import React from "react";
import UploadButton from "./upload_button";
import ImageList from './photolist';


class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_title: "",
      photo_url:""
    };
    this.postImage = this.postImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchPhotos();
    console.log(this.props);
  }

  postImage(image) {
    // debugger
    const data = {photo_url: image.url, photo_title: "test"};
    this.setState({photo_url: image.url});
    // debugger
    this.props.postPhoto(data);
  }

  update(field) {
    return (e) =>{
      this.setState({[field]: e.curentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <ImageList photos={this.props.photo}></ImageList>
          <label>
            Photo Title:
            <input type="text" value={this.state.photo_title} onChange={this.update('photo_title')}></input>
          </label>
          <UploadButton postImage={this.postImage}/>
          <input type="submit" value="Submit your new baby!!!"></input>
        </form>
      </div>
    );
  }
}

export default Photos;


// <input type="text" value={this.state.photo.photo_title}></input>
