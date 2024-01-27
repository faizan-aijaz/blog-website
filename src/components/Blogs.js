import React from 'react';
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBBtn,
    MDBIcon,
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import Badge from './Badge';

const Blogs = ({title, category ,description, id,imageUrl, excerpt, handleDelet}) => {
  return (
    <MDBCol size="4">
        <MDBCard className='h-100 mt-2' style={{maxWidth:"22rem"}}>
        <Link to={`/Blog/${id}`}> <MDBCardImage
            src={imageUrl}
            alt={title}
            position='top'
            style={{maxWidth:"100%", height:"180px"}}/></Link>
            <MDBCardBody>
                <MDBCardTitle tag='h5'>{title}</MDBCardTitle>
                <MDBCardText>
                {excerpt(description)}
                <Link to={`/blog/${id}`}>Read More</Link>
                </MDBCardText>
                <Badge>{category}</Badge>

              

                <div className='d-flex justify-content-between align-items-center'>
                    <MDBBtn className='mt-1'
                     tag="a" 
                     color='none'
                     onClick={() => handleDelet(id)}>
                      <MDBIcon fas icon="trash" style={{ color: '#dd4b39' }} size='lg' />  
                    </MDBBtn>
                    
                    <Link to={`/editBlog/${id}`}>
                    <MDBIcon fas icon='edit' style={{ color: '#55acee' }} size='lg' />
                    </Link>
                    
                    </div>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
  )
}

 export default Blogs

// chat gpt code

// import React from 'react';
// import { MDBCol, MDBCard, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCardText, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
// import Badge from './Badge';

// const Blogs = ({ title, category, description, id, imageUrl, excerpt, handleDelete }) => {
//   const handleDeleteClick = () => {
//     handleDelete(id);
//   };

//   return (
//     <MDBCol size="4" className="mb-4">
//       <MDBCard className='h-100'>
//         <MDBCardImage src={imageUrl} alt={title} position='top' className='img-fluid' style={{ height: '180px', objectFit: 'cover' }} />
//         <MDBCardBody className="d-flex flex-column">
//           <MDBCardTitle tag='h5'>{title}</MDBCardTitle>
//           <MDBCardText>
//             {excerpt(description)}
//             <Link to={`/blog/${id}`} className='text-decoration-none'>
//               Read More
//             </Link>
//           </MDBCardText>
//           <Badge>{category}</Badge>
//         </MDBCardBody>

//         <div className='mt-auto d-flex justify-content-between align-items-center p-3'>
//           <MDBBtn tag='a' color='none' onClick={handleDeleteClick}>
//             <MDBIcon fas icon="trash" style={{ color: '#dd4b39' }} size='lg' />
//           </MDBBtn>
//           <Link to={`/editBlog/${id}`} className='text-primary'>
//             <MDBIcon fas icon='edit' style={{ color: '#55acee' }} size='lg' />
//           </Link>
//         </div>
//       </MDBCard>
//     </MDBCol>
//   );
// };

// export default Blogs;
