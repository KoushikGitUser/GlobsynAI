import React, { useState } from "react";
import style from "./profileStyle.css";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineEdit } from "react-icons/md";
import profileImg from '../../Assets/Images/userImage2.jpg'

export default function Profile() {
  const [profileImage, setProfileImage] = useState(profileImg);

  const triggerFileInput = () => {
    document.getElementById("fileInput").click(); // Trigger the hidden input
  };

  // Function to handle the selected file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Set the image URL for preview
    }
  };
  return (
    <div className="profile_main_wrapper">
      <div className="profile_photo">
        <img style={{height:"70px",width:"70px",borderRadius:"50px"}} src={profileImage} alt="" />
        <div onClick={triggerFileInput} className="profile_photo_edit_icon">
          <MdOutlineEdit color="white" size={20} />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }} // Hide the actual file input
          />
        </div>
      </div>
      <div className="pro_settings_options ">
        Koushik Chakraborty
        <div className="manage_button">Edit</div>
      </div>
      <div className="pro_settings_options ">Change Password</div>
      <div className="pro_settings_options ">
        Delete account
        <div className="manage_button delete">Delete</div>
      </div>
    </div>
  );
}
