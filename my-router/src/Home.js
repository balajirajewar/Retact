import React from "react";
import { useState, useEffect } from "react";
import { useSelector,useDispatch  } from "react-redux"
import { useNavigate   } from "react-router-dom";
import * as action from "./Actions/index"

function Home()
{
  const navigate = useNavigate();
  const mystate = useSelector((state)=>state);
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users)

   const  navigateToUser= ()=>{
    navigate('/Users')
   } 
   useEffect(()=>{
    dispatch(action.getData())
   },[]);
   const profile = users.filter( userdetails =>( 
    userdetails.id === 1
    )
)

    return(
        <div className="home-wrapper">
<div className="user-list">
            <table >
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Profile Image</th>
                <th>Phone</th>
                <th>Email</th>
                </tr>
        {   
            profile.map((users, i)=>(
             <tr key={i}>
            <td>
               {/* <Link to="/UserProfile$"> {users.id}</Link>  */}
               {users.id}
           
                
                 
                 </td>
              <td>{users.name}</td>
              <td>
                <img src={users.imgURL}/></td>
              <td>{users.phone}</td> 
              <td>{users.email}</td>
             
              </tr>
            )
            )
          }
          </table>
      </div>

      <button className="btn" onClick={navigateToUser}>Users</button>

        </div>
    );

}
export default Home;