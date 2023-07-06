import React from "react";
import userData from "./Users-list";
import { Link,NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector,useDispatch  } from "react-redux"
import * as action from "./Actions/index"
function Users(){
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users);
  useEffect(()=>{
    dispatch(action.getData())
   },[]);
    return(
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
            users.map((users)=>(
             <tr>
            <td>
               {/* <Link to="/UserProfile$"> {users.id}</Link>  */}
               <Link to={`/UserProfile/${users.name}`}> {users.id}</Link> 
           
                
                 
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
    )
}
export default Users;
