// import HomeIcon from '@material-ui/icons/Home';
// import DevicesIcon from '@material-ui/icons/Devices';
// import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
// import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
// import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
// import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
// import CloudQueueIcon from '@material-ui/icons/CloudQueue';
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
// import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
// import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
// import { useRef } from 'react';
// import { useState ,useEffect} from 'react';
// import 'firebase/storage';
// import { db, FieldValue } from '../Firebase/Firebase';
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import firebase from 'firebase/compat/app'; 

// const Sidebar=()=>{
//     const popUpRef = useRef(null);
//     const fileInputRef = useRef(null);
//     const [isPopUpVisible, setIsPopUpVisible] = useState(false);

//     const handleFileUpload = async(event) => {
//         console.log("hello");
//         const file = event.target.files[0]; 

//         try {
//             const storage = getStorage();
            
//             const storageRef = ref(storage, `files/${file.name}`);
//             const uploadTask = uploadBytesResumable(storageRef, file);
//             const snapshot = await uploadTask;

//             const downloadURL = await getDownloadURL(snapshot.ref);

//             await db.collection('files').add({
//                 timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//                 filename: file.name,
//                 fileURL: downloadURL,
//                 size: snapshot.totalBytes
//             });
            

//             console.log("File uploaded and details saved to Firestore!");
//         } catch (error) {
//             console.error("Error uploading file: ", error);
//         }
            
       
//     };
//     useEffect(() => {
//         function handleClickOutside(event) {
//         if (popUpRef.current && !popUpRef.current.contains(event.target) && event.target.tagName !== "BUTTON") {
//         setIsPopUpVisible(false);
//         }
//         }
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//         };
//         }, []);

//         const openFileUploadDialog = () => {
//             fileInputRef.current.click();
//         };
//         const togglePopUpVisibility = () => {
//             setIsPopUpVisible(!isPopUpVisible);
//             };
   
//         const handleButtonClick = () => {
//             setIsPopUpVisible(false);
//         };
                 
//     return(
//         <>
//         <div className='sidebarContainer'>
//             <div className='sidebarButton'>
//             <button onClick={togglePopUpVisibility}>
//                 <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" />
//                 <span>New</span>
//                 </button>
//                </div>
//             <div className="sidebarOptions">
//                 <div className='sidebarOption'>
//                 <HomeIcon/>
//                 <span>Home</span>
//                 </div>
//                 <div className='sidebarOption'>
//                 <ScreenShareOutlinedIcon/>
//                 <span>My Drive</span>
//                 </div>
//                 <div className='sidebarOption'>
//                 <DevicesIcon />
//                 <span>Computers</span>
//                 </div>
//                 <div className='sidebarOption'>
//                 <PeopleAltOutlinedIcon />
//                 <span>Shared with me</span>
//                 </div>
//                 <div className='sidebarOption'>
//                 <QueryBuilderOutlinedIcon />
//                 <span>Recent</span>
//                 </div>
//                 <div className='sidebarOption'>
//                 <StarBorderOutlinedIcon />
//                 <span>Starred</span>
//                 </div>
//                 <div className='sidebarOption'>
//                 <InfoOutlinedIcon/>
//                 <span>spam</span>
//                </div>
//                 <div className='sidebarOption'>
//                 <DeleteOutlineOutlinedIcon />
//                 <span>Bin</span>
//                 </div>
//                 <div className='sidebarOption'>
//                 <CloudQueueIcon />
//                 <span>Storage</span>
//                 </div>
//                 <div className="progress_bar">
//                     <progress className='bar' size="tiny" value="50" max="100" />
//                     <span>10 GB  of 15 GB used</span>
//                 </div>
//             </div>
           
//             {isPopUpVisible && (
//                <div className='popUp1' ref={popUpRef}>
//                <div className='top'>
//                <button className='flex1'>
//                <FolderOutlinedIcon />
//                <span>New Folder</span>
//                 </button>
//                <hr></hr>
//                <button  className='flex1'
//                       onClick={() => {
//                           handleButtonClick();
//                           openFileUploadDialog();
                         
//                     }}
//                 >
//                     <CloudUploadOutlinedIcon />
//                     <span>File Upload</span>
//                     <input
//                      type='file'
//                      style={{ display: 'none' }}
//                      />
//                 </button>
//                 <button className='flex1'>
//                 <CloudUploadOutlinedIcon/>
//                 <span>Folder Upload</span>
//                 </button>
//                 </div>
//                 </div>

//             )}
                   
//             </div>
       
//         </>
//     )
// }

// export default Sidebar;


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
import { useRef } from 'react';
import { useState ,useEffect} from 'react';
import 'firebase/storage';
import { db } from '../Firebase/Firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebase from 'firebase/compat/app'; 

const Sidebar=()=>{
    const popUpRef = useRef(null);
    const fileInputRef = useRef(null);
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const handleFileUpload = async(file) => {
        console.log("File selected:", file.name);

        try {
            const storage = getStorage();
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            const snapshot = await uploadTask;

            const downloadURL = await getDownloadURL(snapshot.ref);

            await db.collection('files').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                filename: file.name,
                fileURL: downloadURL,
                size: snapshot.totalBytes
            });

            console.log("File uploaded and details saved to Firestore!");
        } catch (error) {
            console.error("Error uploading file: ", error);
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (popUpRef.current && !popUpRef.current.contains(event.target) && event.target.tagName !== "BUTTON") {
                setIsPopUpVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const openFileUploadDialog = () => {
        fileInputRef.current.click();
    };

    const togglePopUpVisibility = () => {
        setIsPopUpVisible(!isPopUpVisible);
    };
   
    const handleButtonClick = () => {
        setIsPopUpVisible(false);
        openFileUploadDialog();
    };
                 
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        handleFileUpload(file);
    };

    return(
        <>
            <div className='sidebarContainer'>
                <div className='sidebarButton'>
                    <button onClick={togglePopUpVisibility}>
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
                {isPopUpVisible && (
                    <div className='popUp1' ref={popUpRef}>
                        <div className='top'>
                            <button className='flex1'>
                                <FolderOutlinedIcon />
                                <span>New Folder</span>
                            </button>
                            <hr></hr>
                            <button  className='flex1' onClick={handleButtonClick}>
                                <CloudUploadOutlinedIcon />
                                <span>File Upload</span>
                            </button>
                            <button className='flex1'>
                                <CloudUploadOutlinedIcon/>
                                <span>Folder Upload</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <input
                type='file'
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileInputChange}
            />
        </>
    )
}

export default Sidebar;
