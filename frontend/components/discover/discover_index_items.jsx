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
