// import React, { useState } from 'react'
// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBNavbarBrand,
//     MDBCollapse
//   } from 'mdb-react-ui-kit';


// const Header = () => {
//     const [show,setShow]= useState(false);
//   return (
    
//     <div>
//         <MDBNavbar expand='lg' light style={{ backgroundColor: '#543b1b' }}>
//         <MDBContainer fluid>
//           <MDBNavbarBrand href='/'>
//             <img src="/images/logo.jpg" alt="logo" style={{height: "30px"}}/>
//           </MDBNavbarBrand>
//           <MDBNavbarToggler
//             type='button'
//             data-target='#navbarColor02'
//             aria-controls='navbarColor02'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             style={{color:'#fff'}} 
//             onClick={() => setShow(!show)}
            
//           >
//             <MDBIcon icon='bars' fas />
//           </MDBNavbarToggler>
//           <MDBCollapse open={show} navbar>
//             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//               <MDBNavbarItem className='active'>
//                 <MDBNavbarLink aria-current='page' href='/' style={{ color: "#fff"}}>
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='/addBlog' style={{ color: "#fff"}}>Add Blog</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='/About' style={{ color: "#fff"}}>About</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='/About' style={{ color: "#fff"}}>Login</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='/About' style={{ color: "#fff"}}>SignUp</MDBNavbarLink>
//               </MDBNavbarItem>
             
//             </MDBNavbarNav>
   
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </div>
//   )
// }

// export default Header

/// chatgpt

import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

import '../App.css';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <MDBNavbar expand='lg' light style={{ backgroundColor: '#543b1b' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/logo.jpg" alt="Company Logo" style={{ height: "50px", marginRight: "10px" }} />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{ color: '#fff' }}
          onClick={() => setShow(!show)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse open={show} navbar>
          <MDBNavbarNav className='ms-auto'>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current='page' href='/' style={{ color: "#fff", fontWeight: 'bold' }} className='navberanchor'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/addBlog' style={{ color: "#fff", fontWeight: 'bold' }}>Add Blog</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about' style={{ color: "#fff", fontWeight: 'bold' }}>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/login' style={{ color: "#fff", fontWeight: 'bold' }}>Login</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/signup' style={{ color: "#fff", fontWeight: 'bold' }}>SignUp</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
