// // import React from 'react'

// // import Data from "./product.json";

// // const display = () => {
// //   return (
// //     <div className="inner">
// //         {
// //             Data && Data.map( data => {
// //                 return(
// //                     <div className="box">
// //                         <img src={data.productData.image}/>
// //                     </div>
// //                 )

// //             })
           
// //         }
// //     </div>
// //   )
// // }

// // export default display


// import { useState, useEffect } from 'react';
// const display = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch('../public/product.json')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPhotos(data);
//       });
//   }, []);
//   return (
//     <div>
      
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//       ))}
//     </div>
//   );
// };
// export default display;