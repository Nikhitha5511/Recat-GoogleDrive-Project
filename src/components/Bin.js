import react from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Bin=()=>{
   return(
    <div className='binContainer'>
    <div className='firstCntainer'>
        <p className='text'>Bin for My Drive</p>
        <ArrowDropDownIcon/>
    </div>
    <div className='secondContainer'>
        <ListIcon className='listicon'/>
        <InfoOutlinedIcon />
    </div>
    </div>
   )
}


export default Bin;
