import React from "react";

class UserIndexPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.photos.map(photo => {
            return (
              <li key={photo.id}>
                <img src={photo.photo_url} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserIndexPhotos;

// this.props.photos.map(photo => {
//   return <img src={photo.photo_url} />;
// });
