import React from 'react';

class DiscoverIndexItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="image-element-class">
        <div>
          <img src={this.props.photo.photo_url} onClick={this.props.openPhoto(this.props.photo)}/>


        </div>
      </div>
    );
  }
}

export default DiscoverIndexItems;




// <div key={idx} className="image image-element-class">
//   <li key={photo.id} className="profile-index-photo">
//     <img src={photo.photo_url} onClick={this.openPhoto(photo)} />
//   </li>
//   <div className="hidden-photo-info">
//     <div className="message">
//       "{photo.photo_title}"&nbsp;
//       {photo.age} ago
//     </div>
//   </div>
// </div>
// )



// <div className="hidden-photo-info">
//   <div className="message">
//     "{this.props.photo.photo_title}"&nbsp;
//     {this.props.photo.age} ago
//   </div>
// </div>
//
