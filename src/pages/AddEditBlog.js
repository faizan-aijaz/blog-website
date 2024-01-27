import React, {useEffect, useState} from 'react'
import {MDBValidation, MDBInput, MDBBtn} from "mdb-react-ui-kit";
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

//wcj1i1ap

const initialState = {
    title: "",
    description: "",
    category: "",
    imageUrl: ""
}

const options = ["Travel", "Fasion", "Fitness", "Sports" , "Food", "Tech" ];



//for addblogs
const AddEditBlog = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrMsg, setCategoryErrMsg] = useState(null)
  const [editMode, setEditMode] = useState(false);
  const {title, description, category, imageUrl} = formValue;

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() =>{
    if(id){
      setEditMode(true);
      getSingleBlog(id);
    }else{
      setEditMode(false);
      setFormValue({...initialState});
    }
  }, [id]);

  const getSingleBlog = async(id) =>{
    const singleBlog = await axios.get(`http://localhost:3333/blogs/${id}`);
    if(singleBlog.status === 200){
      setFormValue({...singleBlog.data});
    }else{
      toast.error("something went wrong");
    }
   
  };
  ///for date 
  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
    let yyyy = today.getFullYear();
  
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };
  
  //For date
  // const getDate = () =>{
  //   let today = new Date();
  //   let dd = String(today.getDate().padStart(2, "0"));
  //   let mm = String(today.getMonth()+ 1).padStart(2, "0"); //january is 0
  //   let yyyy = today.getFullYear();

  //   today = mm + "/" + dd + "/" + yyyy;
  //   return today;
  // }

  //handle submit 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!category){
      setCategoryErrMsg("please select a category");
    }
    const imageValidation = !editMode ? imageUrl : true;
    if(title && description && imageUrl && category){
      const currentDate = getDate();
      if(!editMode) {
        const updatedBlogData = {...formValue, date:currentDate};
        const response = await axios.post(
          "http://localhost:3333/blogs", 
          updatedBlogData);  
        if(response.status === 201){
          toast.success("Blog created Successfully")
        }else{
          toast.error("something went wrong");
        }
      }else{
        const response = await axios.put(
          `http://localhost:3333/blogs/${id}`, 
          formValue);  
        if(response.status === 200){
          toast.success("Blog Updated Successfully");
        }else{
          toast.error("something went wrong");
        }
      }
     
      setFormValue({title: "", description: "", category: "", imageUrl: ""})
      navigate("/");
    }
  };



  //for handle submit by chatgpt
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     if (!category) {
  //       setCategoryErrMsg("Please select a category");
  //       return; // Exit the function if category is not selected
  //     }
  
  //     if (title && description && imageUrl && category) {
  //       const currentDate = getDate();
  //       const updatedBlogData = { ...formValue, date: currentDate };
  
  //       // Assuming JSON Server is running on port 3000 and 'blogs' is the endpoint
  //       const response = await axios.post("http://localhost:3333/blogs", updatedBlogData);
  
  //       if (response.status === 201) {
          
  //         toast.success("Blog created successfully");
  //         setFormValue({ title: "", description: "", category: "", imageUrl: "" });
  //         navigate("/");
  //       } else {
  //         toast.error("Something went wrong");
  //       }
  //     }
  //   } catch (error) {
  //     console.log("abc", error)
  //     console.error("Error creating blog:", error);
  //     toast.error("Network Error. Please try again later.");
  //   }
  // };
  


  //for on change
  const onInputChange = (e) => {
    let {name, value} = e.target;
    setFormValue({...formValue, [name]: value});
  };
 // For upload images
const onUploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "wcj1i1ap"); // corrected typo

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dmkswdwhj/image/upload",
      formData
    );

    if (response.status === 200) {
      toast.info("Image Uploaded Successfully");
      setFormValue({ ...formValue, imageUrl: response.data.url });
    } else {
      toast.error("Something went wrong with image upload");
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    toast.error("Something went wrong");
  }
};
  //for uploadimages
  // const onUploadImage = (file) =>{
  //   console.log("file", file);
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_present", "wcj1i1ap");
  //   axios.post("https://api.cloudinary.com/v1_1/dmkswdwhj/image/upload", formData)
  //   .then((resp) =>{
  //     toast.info("Image Uploaded Successfully");
  //     setFormValue({...formValue, imageUrl: resp.data.url });
  // })
  // .catch((err) => {
  //   toast.error("Something went Wrong");
  // });  
  // };

  const onCategoryChange = (e) => {
    setCategoryErrMsg(null);
    setFormValue({...formValue, category: e.target.value});
  };
  return (
    <MDBValidation className='row g-3'
    style={{ marginTop: "100px"}}
    noValidate
    onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">{editMode ? "Update Blog" : "Add Blog"}</p>
      <div 
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
      >
        <MDBInput
        value={title || ""}
        name='title'
        type='text'
        onChange={onInputChange}
        required
        label="Title"
        validation="please provide a title"
        invalid
        />
        <br/>
        <MDBInput
        value={description || ""}
        name='description'
        type='text'
        onChange={onInputChange}
        required
        label="description"
        validation="please provide a description"
        textarea
        rows={6}
        invalid
        />
        <br/>
      {!editMode && (
        <>
           <MDBInput
        name='image'
        type='file'
        onChange={(e) => onUploadImage(e.target.files[0])}
        required
        validation="please provide a image"
        invalid
        />
        <br/>
        </>
      )}
       <select
       className='categoryDropdown'
       onChange={onCategoryChange}
       value={category}
       >
        <option>Please select category</option>
        {options.map((option, index) => (
          <option value={option || ""} key={index}>
            {option}
          </option>
        ))}
       </select>
       {categoryErrMsg && (
        <div className='categoryErrMsg'>{categoryErrMsg}</div>
       )}
       <br />
       <br />
       <MDBBtn type='submit' style={{marginRight: "10px"}}>{editMode ? "Update Blog" : "Add Blog"}</MDBBtn>
       <MDBBtn color='danger' style={{marginRight: "10px"}} 
       onClick={() => navigate("/")}
       >Go Back</MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default AddEditBlog