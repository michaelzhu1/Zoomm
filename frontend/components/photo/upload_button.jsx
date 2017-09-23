// import React from "react";
//
// class UploadButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.upload = this.upload.bind(this);
//   }
//
//   upload(e) {
//     e.preventDefault();
//     cloudinary.openUploadWidget(
//       window.CLOUDINARY_OPTIONS,
//       function(error, images) {
//         if (error === null) {
//           this.props.postImage(images[0]);
//         }
//       }.bind(this)
//     );
//   }
//
//   render() {
//     return <button onClick={this.upload}>Upload Photo</button>;
//   }
// }
//
// export default UploadButton;
