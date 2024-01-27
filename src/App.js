import './App.css';
import {Routes,BrowserRouter,Route} from "react-router-dom";
import AddEditBlog from './pages/AddEditBlog';
import Blog from './pages/Blog';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
// import Login from './pages/Login';
// import Signup from './pages/Signup';





function App() {
  return (
    <>
    <BrowserRouter>
        <div className="App">
          <Header/>

        <ToastContainer /> 
          <Routes>

            
          <Route path='/' element={<Home />} />
          <Route path="/addBlog" element={<AddEditBlog />} />
          <Route path="/editBlog/:id" element={<AddEditBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path='/Login' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/> */}
          </Routes>
          <Footer />
    </div>
    
      </BrowserRouter>
 
    
    </>
      
  
  );
}

export default App;
