// import React from "react";
// import ReactDOM from "react-dom";
// import UploadButton from "./upload_button";
// import ImageList from "./photolist";
// import Modal from "react-modal";
//
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };
//
// class Photos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalIsOpen: false,
//       photo_title: "",
//       photo_url: ""
//     };
//     this.uploadImage = this.uploadImage.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.upload = this.upload.bind(this);
//     this.openModal = this.openModal.bind(this);
//     this.afterOpenModal = this.afterOpenModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//   }
//
//   openModal() {
//     this.setState({ modalIsOpen: true });
//   }
//
//   afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     this.subtitle.style.color = "#6288a5";
//   }
//
//   closeModal() {
//     this.setState({ modalIsOpen: false });
//   }
//
//   componentDidMount() {
//     this.props.fetchPhotos();
//     console.log(this.props);
//   }
//
//   uploadImage(image) {
//     // debugger
//     // const data = { photo_url: image.url, photo_title: "test" };
//     this.setState({ photo_url: image.url });
//     // debugger
//     // this.props.postPhoto(data);
//   }
//
//   update(field) {
//     return e => {
//       this.setState({ [field]: e.currentTarget.value });
//     };
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     console.log(this.state);
//     this.props.postPhoto(this.state);
//   }
//
//   upload(e) {
//     e.preventDefault();
//     cloudinary.openUploadWidget(
//       window.CLOUDINARY_OPTIONS,
//       function(error, images) {
//         if (error === null) {
//           this.uploadImage(images[0]);
//         }
//       }.bind(this)
//     );
//   }
//
//   render() {
//     return (
//       <div>
//         <Modal
//           isOpen={this.state.modalIsOpen}
//           onAfterOpen={this.afterOpenModal}
//           onRequestClose={this.closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Photo Title:
//               <input
//                 type="text"
//                 value={this.state.photo_title}
//                 onChange={this.update("photo_title")}
//                 className="photo-title glowing-border"
//               />
//             </label>
//             <label>
//               Photo Description:
//               <textarea
//                 value={this.state.photo_description}
//                 onChange={this.update("photo_description")}
//                 className="photo-title glowing-border"
//               />
//             </label>
//             <button onClick={this.upload}>Upload Photo</button>
//             <img src={this.state.photo_url} />
//             <input type="submit" value="Submit your new baby!!!" />
//           </form>
//         </Modal>
//       </div>
//     );
//   }
// }
//
// export default Photos;
//
// // <input type="text" value={this.state.photo.photo_title}></input>
//
// // <UploadButton uploadImage={this.uploadImage} />
