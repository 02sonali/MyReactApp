import React, {useContext, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../ThemeContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartPopover from './CartPopover';

/*** Function Component ***/
export const Header = () => {

  /*** using react hooks to update theme via context ***/
  // const themeContext = useContext(ThemeContext)
  // const [currentTheme, changeTheme] = useState(themeContext.theme); 
  // useEffect(() => {
  //   themeContext.setTheme(currentTheme); //todo - check browser warning here  -- React Hook useEffect has a missing dependency
  // }, [currentTheme])

  const styleLink = {color:"orange"}

   return <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">ShopApp</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/products">Product List</Nav.Link>
        <Nav.Link href="/admin">Admin</Nav.Link>
        <CartPopover></CartPopover>
      </Nav>
  
    </Navbar>
   
    
    {/* <label> Theme via context: <b> {themeContext.theme} </b>
      <select value={currentTheme} onChange={e => changeTheme(e.currentTarget.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label> */}
    
}

export default Header;