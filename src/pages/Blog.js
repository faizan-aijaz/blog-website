// import React,  {useState, useEffect} from 'react'
// import {
//   MDBIcon,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardText,MDBCardTitle,MDBCardBody,MDBCardImage,MDBTypography} from "mdb-react-ui-kit";
// import {useParams, Link} from "react-router-dom";
// import axios from "axios";
// import Badge from '../components/Badge';
// import {toast} from "react-toastify"
// import Footer from '../components/Footer';

// const Blog = () => {
//   const [blog, setBlog] =useState();
//   const [relatedPost, setRelatedPost] = useState([]);
//   const {id} = useParams();

//   useEffect(() =>{
//     if(id){
//       getSingleBlog();
//     }
//   },[id]);

//   const getSingleBlog = async () =>{
//     const response = await axios.get(`http://localhost:3333/blogs/${id}`);
//     const relatedPostData = await axios.get(
//       `http://localhost:3333/blogs?category${response.data.category}&_start=0&_end=3`);
//     if(response.status === 200 || relatedPostData.status === 200){
//       setBlog(response.data);
//       setRelatedPost(relatedPostData.data);
    
//     }else{
//       toast.error("Somthing went wrong");
//     }
//   };
//   const excerpt = (str) =>{
//     if(str.length > 60){
//       str = str.substring(0, 60) + "...";
//     }
//     return str;
//   }


//   const styleInfo = {
//     display: "inline",
//     margineLeft:"5px",
//     float:"right",
//     marginTop:"7px"
//   }
//   return (
//     <MDBContainer style={{border: "1px solid #d1ebe8"}}>
//       <Link to= "/">
//       <strong style={{float: "left", color: "black"}} className='mt-3'>
//         Go Back
//       </strong>
//       </Link>
//     <MDBTypography 
//     tag="h2"
//     className='text-muted mt-2'
//     style={{display:"inline-block"}}
//     >
//       {blog && blog.title}
//     </MDBTypography>
//     <img
//     src={blog && blog.imageUrl}
//     className='img-fluid rounded'
//     alt={blog && blog.title}
//     style={{width: "100%", maxHeight:"600px"}}
//     />
//     <div style={{marginTop: "20px"}}>
//       <div style={{height: "43px", background: "#f6f6f6"}}>
//       <MDBIcon 
//       style={{float:"left"}}
//       className='mt-3'
//       far
//       icon='calendar-alt'
//       size='lg'/>
      
//       <strong style={{float:"left", marginTop: "12px", marginLeft:"2px"}}>
//         {blog && blog.date}
//       </strong>
//       <Badge styleInfo={styleInfo}>{blog && blog.category}
//       </Badge>
//       <MDBTypography className='lead md-8'>
//         {blog && blog.description}
//       </MDBTypography>
//       </div>
//     </div>
    
//     {relatedPost && relatedPost.length > 0 && (
//       <>
//       {relatedPost.length > 1 && <h1>Related Post</h1> }
        
//       <MDBRow>
//   {relatedPost.filter((item)=> item.id !== id).map((item , index)=> (
//         <MDBCol>
//           <MDBCard>
//             <Link to={`/blog/${item.id}`}>
//               <MDBCardImage
//               src={item.imageUrl}
//               alt={item.title}
//               position='top'
//               />
//             </Link>
//             <MDBCardBody>
//               <MDBCardTitle>{item.title}</MDBCardTitle>
//               <MDBCardText>{excerpt(item.description)}</MDBCardText>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>  
//       ))}
//       </MDBRow>
//       </>
//     )};
    
//     </MDBContainer>
//   )
// };

// export default Blog


///chatgpt

import React, { useState, useEffect } from 'react';
import { MDBIcon, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardText, MDBCardTitle, MDBCardBody, MDBCardImage, MDBTypography } from "mdb-react-ui-kit";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Badge from '../components/Badge';
import { toast } from "react-toastify";
import Footer from '../components/Footer';

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [relatedPost, setRelatedPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  const getSingleBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/blogs/${id}`);
      const relatedPostData = await axios.get(
        `http://localhost:3333/blogs?category=${response.data.category}&_start=0&_end=3`
      );

      setBlog(response.data);
      setRelatedPost(relatedPostData.data);
    } catch (error) {
      console.error("Something went wrong:", error);
      toast.error("Something went wrong");
    }
  };

  const excerpt = (str) => {
    if (str.length > 60) {
      str = str.substring(0, 60) + "...";
    }
    return str;
  };

  const styleInfo = {
    display: "inline",
    marginLeft: "5px",
    float: "right",
    marginTop: "7px",
  };

  return (
    <MDBContainer style={{ border: "1px solid #d1ebe8", padding: "20px" }}>
      <Link to="/">
        <strong style={{ float: "left", color: "black" }} className='mt-3'>
          Go Back
        </strong>
      </Link>
      <MDBTypography
        tag="h2"
        className='text-muted mt-2'
        style={{ display: "inline-block", marginTop: "20px" }}
      >
        {blog && blog.title}
      </MDBTypography>
      <img
        src={blog && blog.imageUrl}
        className='img-fluid rounded mt-3'
        alt={blog && blog.title}
        style={{ width: "100%", maxHeight: "600px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <div style={{ height: "43px", background: "#f6f6f6" }}>
          <MDBIcon
            style={{ float: "left" }}
            className='mt-3'
            far
            icon='calendar-alt'
            size='lg'
          />
          <strong style={{ float: "left", marginTop: "12px", marginLeft: "2px" }}>
            {blog && blog.date}
          </strong>
          <Badge styleInfo={styleInfo}>{blog && blog.category}</Badge>
        </div>
        <MDBTypography className='lead mt-3'>
          {blog && blog.description}
        </MDBTypography>
      </div>

      {relatedPost && relatedPost.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          {relatedPost.length > 1 && <h1>Related Posts</h1>}
          <MDBRow>
            {relatedPost
              .filter((item) => item.id !== id)
              .map((item, index) => (
                <MDBCol key={index} size="12" md="4">
                  <MDBCard>
                    <Link to={`/blog/${item.id}`}>
                      <MDBCardImage
                        src={item.imageUrl}
                        alt={item.title}
                        position='top'
                      />
                    </Link>
                    <MDBCardBody>
                      <MDBCardTitle>{item.title}</MDBCardTitle>
                      <MDBCardText>{excerpt(item.description)}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
          </MDBRow>
        </div>
      )}

    
    </MDBContainer>
  );
};

export default Blog;
