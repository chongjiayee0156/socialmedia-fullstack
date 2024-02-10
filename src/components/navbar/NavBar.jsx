import './navbar.scss'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

function NavBar() {

    const {darkMode, toggle} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)

    return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" >
            <span>Kdramasocial</span>
        </Link>
        <HouseOutlinedIcon />
        {darkMode? <WbSunnyOutlinedIcon onClick={toggle} />: <NightlightOutlinedIcon onClick={toggle}/> }
        <GridViewOutlinedIcon />
        <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className="right">
        <Person2OutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
            {/* user profile img */}
            <img src={currentUser.profilepic} alt="" />
            <span>{currentUser.name}</span>
        </div>
      </div>

    </div>
  )
}

export default NavBar
