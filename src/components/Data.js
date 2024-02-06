import react from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { db } from '../Firebase/Firebase';
import { useEffect,useState } from 'react';
import { Avatar } from '@material-ui/core';

const Data=({photoURL})=>{
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('files').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        });
        return () => unsubscribe();
    }, []);
    const changeBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-GB', options);
    }

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
                <p><b>Name</b></p>
                <span className='arrow'><ArrowUpwardIcon/></span>
                <div className='space1'>
                <p><b>Owner</b></p>
                <p><b>Last Modified</b></p>
                <p><b>File Size</b></p>
                </div>
            </div>
           
            {files.map(file => (
                <>
                <div key={file.id} className='dataList'>
                    <a href={file.data.fileURL}  target='_blank'>
                        {file.data.filename}
                    </a>
                    <div className='space2'>
                    <p className='avatar'><Avatar src={photoURL}/></p>
                    <p className='date'>{formatDate(file.data.timestamp?.seconds * 1000)}</p>

                    <p>{changeBytes(file.data.size)}</p>

                    <div className='iconData'>
                    <button className='response'><i className="fas fa-arrow-down"></i></button>
                    <button className='response'><i className="fas fa-share-square"></i></button>
                    <button className='response'><i className="fas fa-trash-alt"></i></button>
                    <button className='response'><i className="far fa-star"></i></button>
                    </div>
                   
                    </div>
                   
                 </div>
                
                 </>
            ))}
            

           
            </div>
       
    )
}

export default Data;



