// Dans Header.jsx ou Navbar.jsx
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../public/image/d803a9baf2cafb7c064c4030b74971a7.png'
import Button from '../Button';
const Header = ( ) => {

   
  return (
    <header  className="nav">

     <div className='logo-d'>
          <img className='logo' src={logo} alt="logo" />
        </div>
    
     
      <div className="hd-item">
        
       
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
       
          <NavLink 
            to="/about"
            style={{width:"120px"}}
          >
          About me

          </NavLink>
           <NavLink 
            to="/abouts"
          >
          Skille
          </NavLink>   
      
          <NavLink to="/contact">Contact</NavLink>
        
      </div>

      <Button className="btn btn-outline " size='small'>Hire Me</Button>
    </header>
  );
};
export default Header