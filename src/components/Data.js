import react from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


const Data=()=>{
    return(
        <div className='dataContainer'>
            <div className='dataHeader'>
            <div className="headerLeft">
                    <p>My Drive</p>
                    <ArrowDropDownIcon />
                </div>
                <div className="headerRight">
                    <ListIcon />
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className='dataList'>
                <p><b>Name <ArrowUpwardIcon/></b></p>
                <p><b>Owner</b></p>
                <p><b>Last Modified</b></p>
                <p><b>File Size</b></p>
            </div>
            <div className='dataList'>
                <p>Name</p>
                <p>Owner</p>
                <p>Last Modified</p>
                <p>File Size</p>
            </div>
            
           
            </div>
       
    )
}

export default Data;