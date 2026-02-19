// Dans Header.jsx ou Navbar.jsx
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../public/image/d803a9baf2cafb7c064c4030b74971a7.png'
const Header = ( {homeclass=''}) => {

   
  return (
    <header  className={`nav ${homeclass}`}>
      {
        homeclass?<div className='logo-d'>
          <img className='logo' src={logo} alt="logo" />
        </div>: <div></div>
      }
     
      <div className="hd-item">
        
       
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
      
     
       
          <NavLink 
            to="/about"
            style={{width:"130px"}}
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
    </header>
  );
};
export default Header