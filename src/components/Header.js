import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
const Header=({ photoURL })=>{
    return(
        <div className='HeaderContainer'>
            <div className='headerLogo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Google Drive"/>
            <span>Drive</span>
            </div>
            <div className='headerSearch'>
            <SearchIcon />
            <input  className='searchtext' type="text" placeholder='Search in Drive' />
            <FormatAlignCenterIcon />
            </div>
            <div className='headerIcons'>
            <span>
                <HelpOutlineIcon />
                <SettingsIcon />
                <AppsIcon />
                <Avatar src={photoURL} />
                </span>
            </div>
       
        </div>
    )
}

export default Header;