// import React from "react";

// import "./Modal.css";
// import Carousel, { CarouselItem } from "../Carousel/Carousel";

// import Register from "../images/DMDock/1_Welcome_Page.png";
// import Login from "../images/DMDock/2_LogIn.png";
// import MonsterPage from "../images/DMDock/3_MonsterPage.png";
// import Pagination from "../images/DMDock/4_Pagination.png";
// import FavMonster from "../images/DMDock/5_FavMonster.png";
// import AddPC from "../images/DMDock/6_AddPC.png";
// import PC from "../images/DMDock/7_ViewPC.png";

// const Modal = (props) => {
//   if (!props.show) {
//     return null;
//   }

//   return (
//     <div className="modal" onClick={props.onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-header">
//           <h4>DM DOCK IMAGES</h4>
//         </div>
//         <div className="modal-body">
//           <Carousel>
//             <CarouselItem>{Register}</CarouselItem>
//             <CarouselItem>{Login}</CarouselItem>
//             <CarouselItem>{MonsterPage}</CarouselItem>
//             <CarouselItem>{Pagination}</CarouselItem>
//             <CarouselItem>{FavMonster}</CarouselItem>
//             <CarouselItem>{AddPC}</CarouselItem>
//             <CarouselItem>{PC}</CarouselItem>
//           </Carousel>
//         </div>
//         <div className="modal-footer">
//           <button className="button" onClick={props.onClose}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
