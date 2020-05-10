import React, {useContext, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../ThemeContext';


/*** Function Component ***/
export const Header = () => {

  /*** using react hooks to update theme via context ***/
  const themeContext = useContext(ThemeContext)
  const [currentTheme, changeTheme] = useState(themeContext.theme); 
  useEffect(() => {
    themeContext.setTheme(currentTheme); //todo - check browser warning here  -- React Hook useEffect has a missing dependency
  }, [currentTheme])

  const styleLink = {color:"orange"}
  return <div>
    <NavLink to="/" activeClassName="active" activeStyle={styleLink} exact> Photo Gallery </NavLink>
    <NavLink to="/admin" activeClassName="active" activeStyle={styleLink}> Admin Panel </NavLink>
    <label> Theme via context: <b> {themeContext.theme} </b>
      <select value={currentTheme} onChange={e => changeTheme(e.currentTarget.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>

  </div>
}

export default Header;