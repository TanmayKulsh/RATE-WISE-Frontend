import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    
    
    const logout = () => {
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");
        window.location.reload();
    }


  return (
    // <h1>hii</h1>
    <>
    <div style={{textAlign:"center", border:"5px solid #FF2300"}}>
        <br></br>
      <h1 style={{color:"blue"}}>Profile Page</h1><br></br>
      <h4>
      <p>First Name: {user.firstNAme}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
      <br></br>
      </h4>
      <a href="/userupdate" style={{color:"yellow"}}>Edit Profile</a>
   <br></br>
   <br></br>
   <br></br>
   
   <a href='/adminfunc' style={{color:"yellow"}}>Click here to access Admin Functionality</a>
    </div>
    <br></br>
    </>
  );
}

export default AdminPage;
