import React from 'react';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props);
    return(
      <ul>
        {this.props.photos.map(photo => {
          return (
            <li>
              <span>{photo.age} ago</span>
              <img src={photo.url}/>
            </li>
          );
        })}
      </ul>
    );
  }


}

export default ImageList;
