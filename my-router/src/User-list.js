import React from "react";
import userData from "./Users-list";
import { Link,NavLink } from "react-router-dom";
function Users(){
    return(
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
            userData.map((users)=>(
             <tr>
            <td>
               {/* <Link to="/UserProfile$"> {users.id}</Link>  */}
               <Link to={`/UserProfile/${users.id}`}> {users.id}</Link> 
           
                
                 
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
    )
}
export default Users;
