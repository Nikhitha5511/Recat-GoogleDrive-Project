import HomeIcon from '@material-ui/icons/Home';
import DevicesIcon from '@material-ui/icons/Devices';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import { storage, db } from '../Firebase/Firebase';
import firebase from "../Firebase/Firebase";

import { useRef } from 'react';
import { useState} from 'react';



const Sidebar=()=>{
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileUpload = (event) => {
        event.preventDefault();

        const file = fileInputRef.current.files[0];
        
        // Check if a file is selected
        if (!file) {
            alert('Please select a file.');
            return;
        }

        // Set up metadata for the file
        const metadata = {
            contentType: file.type,
        };

        // Upload the file to Firebase Storage
        const uploadTask = storage.ref(`files/${file.name}`).put(file, metadata);

        // Set up progress listener for the upload task
        uploadTask.on('state_changed', 
            (snapshot) => {
                // Handle progress updates here if needed
            }, 
            (error) => {
                // Handle errors during upload
                console.error('Error uploading file:', error);
            }, 
            () => {
                // Upload completed successfully, get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // Save file details to Firebase Firestore
                    db.collection('files').add({
                        filename: file.name,
                        fileURL: downloadURL,
                        timestamp: new Date(),
                    })
                    .then(() => {
                        // File details saved successfully
                        alert('File uploaded successfully!');
                    })
                    .catch((error) => {
                        // Error saving file details to Firestore
                        console.error('Error saving file details:', error);
                    });
                });
            }
        );

        setUploading(true);
        
        
       
    };
    const openFileUploadDialog = () => {
        fileInputRef.current.click();
    };
    
    
    return(
        <>
        <div className='sidebarContainer'>
            <div className='sidebarButton'>
            <button>
                <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" />
                <span>New</span>
                </button>
            </div>
            <div className="sidebarOptions">
                <div className='sidebarOption'>
                <HomeIcon/>
                <span>Home</span>
                </div>
                <div className='sidebarOption'>
                <ScreenShareOutlinedIcon/>
                <span>My Drive</span>
                </div>
                <div className='sidebarOption'>
                <DevicesIcon />
                <span>Computers</span>
                </div>
                <div className='sidebarOption'>
                <PeopleAltOutlinedIcon />
                <span>Shared with me</span>
                </div>
                <div className='sidebarOption'>
                <QueryBuilderOutlinedIcon />
                <span>Recent</span>
                </div>
                <div className='sidebarOption'>
                <StarBorderOutlinedIcon />
                <span>Starred</span>
                </div>
                <div className='sidebarOption'>
                <InfoOutlinedIcon/>
                <span>spam</span>
               </div>
                <div className='sidebarOption'>
                <DeleteOutlineOutlinedIcon />
                <span>Bin</span>
                </div>
                <div className='sidebarOption'>
                <CloudQueueIcon />
                <span>Storage</span>
                </div>
                <div className="progress_bar">
                    <progress className='bar' size="tiny" value="50" max="100" />
                    <span>10 GB  of 15 GB used</span>
                </div>
            </div>
            <div className='popUp1'>
                <div className='top'>
                <button className='flex1'>
                    <FolderOutlinedIcon />
                    <span>New Folder</span>
                </button>
                <hr></hr>
                <button className='flex1' 
                onClick={openFileUploadDialog}
                >
                        <CloudUploadOutlinedIcon />
                        <span>File Upload</span>
                    <input
                        type='file'
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                    />
                </button>
                <button className='flex1'>
                    <CloudUploadOutlinedIcon/>
                    <span>Folder Upload</span>
                </button>
                </div>
            </div>
            
        </div>
       
        </>
    )
}

export default Sidebar;



