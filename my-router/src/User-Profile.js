import React from "react";
import { useParams } from "react-router-dom";
import userData from "./Users-list";
import { useState, useEffect } from "react";
import { useSelector,useDispatch  } from "react-redux"
import * as action from "./Actions/index"
function UserProfile()
{
const {id}= useParams();
const dispatch = useDispatch();
const users = useSelector((state)=>state.users);
useEffect(()=>{
  dispatch(action.getData())
 },[]);
// const profile = userData.filter( userdetails =>( 
//     userdetails.id === id
//     )
// )
    return(
        <div>
        <div>User Profile {id}</div>



        <div className="user-list">
            <table >
                <tr>
                <th>ID</th>
                <th>Name</th>              
                <th>Phone</th>
                <th>Email</th>
                <th>Address </th>
                </tr>
        {   
            users.filter((users)=>users.name ===id).map((users)=>(
             <tr>
            <td>
               {/* <Link to="/UserProfile$"> {users.id}</Link>  */}
               {users.id}
           
                
                 
                 </td>
              <td>{users.name}</td>
              
              <td>{users.phone}</td> 
              <td>{users.email}</td>
              <td>
              <p><b>street:</b> {users.address.street} </p>
              <p><b>city:</b> {users.address.city} </p>
              <p><b>zipcode:</b> {users.address.zipcode} </p>
             
             </td>
              </tr>
            )
            )
          }
          </table>
      </div>
        </div>
    )
}
export default UserProfile