import React from "react";
import { Image, Transformation } from "cloudinary-react";

class UserIndexPhotos extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.photos;
  }

  componentDidMount() {
    // this.props.fetchPhotos();
    console.log(this.props.photos);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.photos.map(photo => {
            return (
              <li key={photo.id}>
                <Image publicId={photo.photo_url} cloudName="foolishhunger">
                  <Transformation width="200" crop="scale" />
                </Image>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserIndexPhotos;
