import React, {useState, useEffect} from 'react'
import axios from "axios";
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import Blogs from '../components/Blogs';
import Search from '../components/Search';
import Category from '../components/Category';
import LatestBlog from '../components/LatestBlog';
import Pagination from '../components/Pagination';
import Carousel from '../components/Carousel';


const Home = () => {
  const [data, setData] = useState([]);
  const [latestBlog, setLatestBlog] = useState ([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalBlog, setTotalBlog] = useState(null);
  const [pageLimit] = useState(5);
  const options = ["Travel", "Fasion", "Fitness", "Sports" , "Food", "Tech" ];

  useEffect(() =>{
    loadBlogData(0, 5, 0);
    fetchLatestBlog();
  }, [])

  const loadBlogData = async (start, end, increase, operation) =>{
    const totalBlog = await axios.get("http://localhost:3333/blogs");
    setTotalBlog(totalBlog.data.length);
    const response = await axios.get(`http://localhost:3333/blogs?_start=${start}&_end=${end}`);
    if(response.status === 200){
      setData(response.data);
      if(operation){
        setCurrentPage(0);
      }else{
        setCurrentPage(currentPage + increase)
      }
    }else{
      toast.error("somthing went wrong");
    }
  };
//latestBlog

const fetchLatestBlog =async () =>{
  const totalBlog = await axios.get("http://localhost:3333/blogs");
    setTotalBlog(totalBlog.data.length);
  const start = totalBlog.data.length -4;
  const end = totalBlog.data.length;
  const response = await axios.get(`http://localhost:3333/blogs?_start=${start}&_end=${end}`);
  if(response.status === 200){
    setLatestBlog(response.data);
  }else{
    toast.error("somthing went wrong");
  }
};

//for delete

  console.log("data", data);
  const handleDelet = async (id) => {
    if(window.confirm("Are you sure that you wantwd to delete the blog ?")){
      const response = await axios.delete(`http://localhost:3333/blogs/${id}`);
      if(response.status === 200){
        toast.success("Blog Deleted Successfully");
        loadBlogData(0, 5, 0, "delete");
      }else{
        toast.error("somthing went wrong");
      }
    }
  };

  const excerpt = (str) =>{
    if(str.length > 50){
      str = str.substring(0, 50) + "...";
    }
    return str;
  }

  //for searching function 

  const onInputChange = (e) =>{
    if(!e.target.value){
      loadBlogData(0, 5, 0);
    }
    setSearchValue(e.target.value);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:3333/blogs?q=${searchValue}`);
    if(response.status === 200){
      setData(response.data);
    }else{
      toast.error("Somthing went wrong");
    }
  }

  //for category 
  const handleCategory = async(Category) =>{
    const response = await axios.get(`http://localhost:3333/blogs?category=${Category}`);
    if(response.status === 200){
      setData(response.data);
    }else{
      toast.error("Something Went Wrong")
    }
  }
  return (
   <>
   <Carousel />
    <Search searchValue={searchValue} 
    onInputChange={onInputChange}
     handleSearch={handleSearch}/>
   <MDBRow>
    {data.length === 0 && (
       <MDBTypography className='text-center mb-0' tag="h2">
        No Blog Found
       </MDBTypography>
    )}
    <MDBCol>
      <MDBContainer>
        <MDBRow>
          {data && data.map((item, index) =>(
            <Blogs
            key={index}
            {...item}
            excerpt={excerpt}
            handleDelet={handleDelet}
            />
          ))}
        </MDBRow>
      </MDBContainer>
    </MDBCol>
    <MDBCol size="3">
      <h4 className='text-start'>LatestBlogs</h4>
      {latestBlog && latestBlog.map((item, index) =>(
        <LatestBlog key={index} {...item} />
      ))}
      <Category options={options} handleCategory={handleCategory}/>
    </MDBCol>
   </MDBRow>
        
        <div className='mt-3'>
          <Pagination 
          currentPage={currentPage}
          loadBlogsData={loadBlogData}
          pageLimit={pageLimit}
          data={data}
          totalBlog={totalBlog}
          /> 
        </div>
   </>
  );
};
 export default Home;


